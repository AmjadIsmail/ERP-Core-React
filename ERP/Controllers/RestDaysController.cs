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
    public class RestDaysController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public RestDaysController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"sp_getRestDays";
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
        public JsonResult Post(RestDays restDays)
        {
            //string query = @"insert into dbo.Departments (DeptName) values ('" + dep.DeptName + @"')";
            string query = @"sp_SaveRestDay";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.CommandType = CommandType.StoredProcedure;
                        string LstEmployeeid = String.Join(",", restDays.empid.Select(p => p.ToString()).ToArray());
                        myCommand.Parameters.AddWithValue("@ListEmployeeid", LstEmployeeid);                        
                        myCommand.Parameters.AddWithValue("@AttnDate", restDays.shiftDate.Split('-')[2]+"-"+restDays.shiftDate.Split('-')[1].ToString().PadLeft(2,'0')+ "-" + restDays.shiftDate.Split('-')[0].PadLeft(2, '0'));
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
            }
            catch(Exception ex)
            {
                return new JsonResult("Error." + ex.Message.ToString());
            }
           

            return new JsonResult("Added Successfully.");
        }

        [HttpPut]
        public JsonResult Put(Departments dep)
        {
            // string query = @"update dbo.Departments set DeptName  = '" + dep.DeptName + @"' where DeptId = '" + dep.DeptID + @"'";
            string query = @"sp_putDepartments";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@deptId", dep.DeptID);
                    myCommand.Parameters.AddWithValue("@deptName", dep.DeptName);
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
          
            string query = "sp_deleteRestDays";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@LeaveDetailid", id);
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
