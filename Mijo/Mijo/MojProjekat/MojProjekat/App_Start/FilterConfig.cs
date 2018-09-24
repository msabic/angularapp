using System.Web.Mvc;

namespace MojProjekat.App_Start
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute(), 1);
            
        }
    }
}