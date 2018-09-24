using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace MojProjekat.ApiControllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.LoginEndpoint)]
    public class LoginApiController : ApiController
    {
    }
}
