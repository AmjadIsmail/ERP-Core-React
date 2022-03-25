using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using ERP.Models;
namespace ERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DesignationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            //  string query = @"select DesigId, Designation from dbo.Designation";
            string query = "sp_getDesignation";
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
        public JsonResult Post(Designation dep)
        {
           // string query = @"insert into dbo.Designation (Designation) values ('" + dep.Designation1 + @"')";
            string query = "sp_postDesignation";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@designation1", dep.Designation1);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully.");
        }

        [HttpPut]
        public JsonResult Put(Designation dep)
        {
            //string query = @"update dbo.Designation set Designation  = '" + dep.Designation1 + @"' where DesigId = '" + dep.DesigID + @"'";
            string query = "sp_putDesignation";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@desid", dep.DesigID);
                    myCommand.Parameters.AddWithValue("@desname", dep.Designation1);
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
            // string query = @"delete from dbo.Designation where DesigId  = '" + id + @"'";
            string query = "sp_DeleteDesignation";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@desid", id);
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
