using MojProjekat.Extensions;
using System.Web.Optimization;

namespace MojProjekat.App_Start
{
    /// <summary>
    /// 
    /// </summary>
    public class BundleConfig
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="bundles">
        /// 
        /// </param>
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/desktop-css")
                .IncludeDirectoryWithExclusion("~/Css/Vendor", "*.css", true, "bootstrap/*.css") // ovo mozda ne treba, sada je less
                .Include("~/css/desktop/style.css"));

            bundles.Add(new ScriptBundle("~/desktop-js")
                .IncludeDirectoryWithExclusion("~/Scripts/Vendor", "*.js", true, "bootstrap/*.js", "modernizr/*.js", "OneSignalSDK.js")
             //   .Include("~/Scripts/env.js")
                .IncludeDirectory("~/Scripts/Desktop", "*.js", false));


            bundles.Add(new ScriptBundle("~/prematch-desktop")
                .Include("~/Scripts/Apps/dist/desktop/inline*")
                .Include("~/Scripts/Apps/dist/desktop/polyfills*")
                .Include("~/Scripts/Apps/dist/desktop/scripts*")
                .Include("~/Scripts/Apps/dist/desktop/styles*")
                .Include("~/Scripts/Apps/dist/desktop/vendor*")
                .Include("~/Scripts/Apps/dist/desktop/main*"));
        }
    }
}