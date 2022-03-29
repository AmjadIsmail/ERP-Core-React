using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using ERP.Models;
using System;

namespace ERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonthSetupController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MonthSetupController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {

            string query = @"sp_GetMonthName";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(MonthSetup val)
        {
           
            string query = @"sp_PostMonthName";
            DataTable table = new DataTable();
            DateTime dtFrom = Convert.ToDateTime(val.FromDate);
            DateTime dtTo = Convert.ToDateTime(val.ToDate);
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@MonthName", val.MonthName);
                    myCommand.Parameters.AddWithValue("@FromDate", dtFrom.ToString("yyyy-MM-dd"));
                    myCommand.Parameters.AddWithValue("@ToDate", dtTo.ToString("yyyy-MM-dd"));
                    myCommand.Parameters.AddWithValue("@IsActive", val.IsActive);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully.");
        }

        [HttpPut]
        public JsonResult Put(MonthSetup val)
        {

            string query = @"sp_PutMonthName";
            DateTime dtFrom = Convert.ToDateTime(val.FromDate);
            DateTime dtTo = Convert.ToDateTime(val.ToDate);
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@AutoId ", val.AutoID);
                    myCommand.Parameters.AddWithValue("@MonthName", val.MonthName);
                    myCommand.Parameters.AddWithValue("@FromDate", dtFrom.ToString("yyyy-MM-dd"));
                    myCommand.Parameters.AddWithValue("@ToDate", dtTo.ToString("yyyy-MM-dd"));
                    myCommand.Parameters.AddWithValue("@IsActive", val.IsActive);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update Successfully.");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {           
            string query = "sp_DeleteMonthSetup";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@Autoid", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully.");
        }

      
    }
}
