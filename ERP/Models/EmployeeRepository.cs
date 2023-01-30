using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private ERP.DBLayer.DBLayer dBLayer;

        public EmployeeRepository(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;_env = env;
            dBLayer = new DBLayer.DBLayer(_configuration, _env);
        }
        JsonResult IEmployeeRepository.GetEmployeeDetails()
        {

            string query = "sp_getemployees";
            CommandType cmdType = CommandType.StoredProcedure;
            DataTable table = dBLayer.GetTable(query, cmdType);
            return new JsonResult(table);
        }
    }
}
