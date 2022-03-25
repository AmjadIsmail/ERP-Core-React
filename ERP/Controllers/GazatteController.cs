using ERP.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace ERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GazatteController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public GazatteController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            
            string query = @"sp_GetGazatte";
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
        public JsonResult Post(Gazatte val)
        {
            //string query = @"insert into dbo.Departments (DeptName) values ('" + dep.DeptName + @"')";
            string query = @"sp_postGazatte";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@GazatteName", val.GazatteName);
                    myCommand.Parameters.AddWithValue("@GazatteDate", val.GazatteDate);
                    myCommand.Parameters.AddWithValue("@Gtypeid", val.GtypeID);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully.");
        }

        [HttpPut]
        public JsonResult Put(Gazatte val)
        {
            
            string query = @"sp_putGazatte";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@GazatteId", val.GazatID);
                    myCommand.Parameters.AddWithValue("@GazatteName", val.GazatteName);
                    myCommand.Parameters.AddWithValue("@GazatteDate", val.GazatteDate);
                    myCommand.Parameters.AddWithValue("@Gtypeid", val.GtypeID);
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
            //string query = @"delete from dbo.Departments where Deptid  = '" + id + @"'";
            string query = "sp_DeleteGazatte";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@Gazatteid", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully.");
        }

        [Route("GetAllGazatteTypes")]
        public JsonResult GetAllGazatteTypes()
        {
            string query = @"sp_Getgazattetype";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
