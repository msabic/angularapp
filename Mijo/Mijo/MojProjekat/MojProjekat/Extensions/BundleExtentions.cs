using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MojProjekat.Extensions
{
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    ///     ref: http://stackoverflow.com/a/36080620
    /// </remarks>
    public static class BundleExtentions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="bundle">
        /// 
        /// </param>
        /// <param name="directoryVirtualPath">
        /// 
        /// </param>
        /// <param name="searchPattern">
        /// 
        /// </param>
        /// <param name="includeSubDirectories">
        /// 
        /// </param>
        /// <param name="excludePatterns">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public static Bundle IncludeDirectoryWithExclusion(this Bundle bundle, string directoryVirtualPath, string searchPattern, bool includeSubDirectories, params string[] excludePatterns)
        {
            var folderPath = HttpContext.Current.Server.MapPath(directoryVirtualPath);

            var searchOption = includeSubDirectories ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly;

            var excludedFiles = GetFilesToExclude(folderPath, searchOption, excludePatterns);

            var resultFiles = Directory.GetFiles(folderPath, searchPattern, searchOption)
                                                        .Where(file => !excludedFiles.Contains(file) && !file.Contains(".min."));

            foreach (string resultFile in resultFiles)
            {
                bundle.Include(directoryVirtualPath + resultFile.Replace(folderPath, string.Empty).Replace("\\", "/"));
            }

            return bundle;
        }

        private static HashSet<string> GetFilesToExclude(string path, SearchOption searchOptions, params string[] excludePatterns)
        {
            var result = new HashSet<string>();

            foreach (string pattern in excludePatterns)
            {
                result.UnionWith(Directory.GetFiles(path, pattern, searchOptions));
            }

            return result;
        }
    }
}