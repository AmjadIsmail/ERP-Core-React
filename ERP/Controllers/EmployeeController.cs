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
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace ERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private IEmployeeRepository EmployeeRepository { get; set; }
        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env , IEmployeeRepository _employeeRepository)
        {
            _configuration = configuration;
            _env = env;
            this.EmployeeRepository = _employeeRepository;
        }

        [HttpGet]
        public JsonResult Get()
        {
            JsonResult EmployeesList = EmployeeRepository.GetEmployeeDetails();           
            return EmployeesList;
        }

        [HttpPost]
        public JsonResult Post(EmployeeDetails emp)
        {
            string query = @"sp_updateemployee";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@EmployeeType", emp.EmployeeType);
                    myCommand.Parameters.AddWithValue("@EmployeeID", emp.EmployeeID);
                    myCommand.Parameters.AddWithValue("@EmpName", emp.EmpName);
                    myCommand.Parameters.AddWithValue("@LastName", emp.LastName);
                    myCommand.Parameters.AddWithValue("@Gender",emp.Gender);
                    myCommand.Parameters.AddWithValue("@MaritalStatus", emp.MaritalStatus);
                    myCommand.Parameters.AddWithValue("@ReligionId", emp.ReligionId);
                    myCommand.Parameters.AddWithValue("@OtherRelegion", emp.OtherRelegion);
                    myCommand.Parameters.AddWithValue("@NIC", emp.NIC);
                    myCommand.Parameters.AddWithValue("@ContactNo", emp.ContactNo);
                    myCommand.Parameters.AddWithValue("@Address", emp.Address);
                    myCommand.Parameters.AddWithValue("@Qualification", emp.Qualification);
                    myCommand.Parameters.AddWithValue("@Other", emp.Other);
                    myCommand.Parameters.AddWithValue("@BirthDate", emp.BirthDate);
                    myCommand.Parameters.AddWithValue("@JoiningDate", emp.JoiningDate);
                    myCommand.Parameters.AddWithValue("@ConfirmDate", emp.ConfirmDate);
                    myCommand.Parameters.AddWithValue("@DesignationID", emp.DesignationID);
                    myCommand.Parameters.AddWithValue("@DepartmentID", emp.DepartmentID);
                    myCommand.Parameters.AddWithValue("@LocationID", emp.LocationID);
                    myCommand.Parameters.AddWithValue("@Status", emp.Status);
                    myCommand.Parameters.AddWithValue("@IsResigned", emp.IsResigned);
                    myCommand.Parameters.AddWithValue("@ResignedDate", emp.ResignedDate);
                    myCommand.Parameters.AddWithValue("@IsActive", emp.IsActive);
                    myCommand.Parameters.AddWithValue("@EOBI", emp.EOBI);
                    myCommand.Parameters.AddWithValue("@EOBINO", emp.EOBINO);
                    myCommand.Parameters.AddWithValue("@SESSIMEMBER", emp.SESSIMEMBER);
                    myCommand.Parameters.AddWithValue("@SESSIID", emp.SESSIID);
                    myCommand.Parameters.AddWithValue("@IsPFMember", emp.IsPFMember);
                    myCommand.Parameters.AddWithValue("@SalaryMode", emp.SalaryMode);
                    myCommand.Parameters.AddWithValue("@DutyHours", emp.DutyHours);
                    myCommand.Parameters.AddWithValue("@BankAccID", emp.BankAccID);
                    myCommand.Parameters.AddWithValue("@CreatedBy", emp.CreatedBy);
                    myCommand.Parameters.AddWithValue("@CreatedOn", emp.CreatedOn);
                    myCommand.Parameters.AddWithValue("@pseudo", emp.pseudo);
                    myCommand.Parameters.AddWithValue("@PayRollEndDate", emp.PayRollEndDate);
                    myCommand.Parameters.AddWithValue("@GradeID",emp.GradeID);
                    myCommand.Parameters.AddWithValue("@AllowRegularity", emp.AllowRegularity);
                    myCommand.Parameters.AddWithValue("@AllowSemiRegulairty", emp.AllowSemiRegulairty);
                    myCommand.Parameters.AddWithValue("@PayRollStartDate", emp.PayRollStartDate);
                    myCommand.Parameters.AddWithValue("@BankCode", emp.BankCode);
                    myCommand.Parameters.AddWithValue("@Workingdays", emp.Workingdays);                  
                    myReader = myCommand.ExecuteReader();

                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully.");
        }

        [HttpPut]
        public JsonResult Put(EmployeeDetails emp)
        {
            string query = @"sp_updateemployee";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERPAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@AutoId", emp.AutoID);
                    myCommand.Parameters.AddWithValue("@EmployeeType", emp.EmployeeType);
                    myCommand.Parameters.AddWithValue("@EmployeeID", emp.EmployeeID);
                    myCommand.Parameters.AddWithValue("@EmpName", emp.EmpName);
                    myCommand.Parameters.AddWithValue("@LastName", emp.LastName);
                    myCommand.Parameters.AddWithValue("@Gender", emp.Gender);
                    myCommand.Parameters.AddWithValue("@MaritalStatus", emp.MaritalStatus);
                    myCommand.Parameters.AddWithValue("@ReligionId", emp.ReligionId);
                    myCommand.Parameters.AddWithValue("@OtherRelegion", emp.OtherRelegion);
                    myCommand.Parameters.AddWithValue("@NIC", emp.NIC);
                    myCommand.Parameters.AddWithValue("@ContactNo", emp.ContactNo);
                    myCommand.Parameters.AddWithValue("@Address", emp.Address);
                    myCommand.Parameters.AddWithValue("@Qualification", emp.Qualification);
                    myCommand.Parameters.AddWithValue("@Other", emp.Other);
                    myCommand.Parameters.AddWithValue("@BirthDate", emp.BirthDate);
                    myCommand.Parameters.AddWithValue("@JoiningDate", emp.JoiningDate);
                    myCommand.Parameters.AddWithValue("@ConfirmDate", emp.ConfirmDate);
                    myCommand.Parameters.AddWithValue("@DesignationID", emp.DesignationID);
                    myCommand.Parameters.AddWithValue("@DepartmentID", emp.DepartmentID);
                    myCommand.Parameters.AddWithValue("@LocationID", emp.LocationID);
                    myCommand.Parameters.AddWithValue("@Status", emp.Status);
                    myCommand.Parameters.AddWithValue("@IsResigned", emp.IsResigned);
                    myCommand.Parameters.AddWithValue("@ResignedDate", emp.ResignedDate);
                    myCommand.Parameters.AddWithValue("@IsActive", emp.IsActive);
                    myCommand.Parameters.AddWithValue("@EOBI", emp.EOBI);
                    myCommand.Parameters.AddWithValue("@EOBINO", emp.EOBINO);
                    myCommand.Parameters.AddWithValue("@SESSIMEMBER", emp.SESSIMEMBER);
                    myCommand.Parameters.AddWithValue("@SESSIID", emp.SESSIID);
                    myCommand.Parameters.AddWithValue("@IsPFMember", emp.IsPFMember);
                    myCommand.Parameters.AddWithValue("@SalaryMode", emp.SalaryMode);
                    myCommand.Parameters.AddWithValue("@DutyHours", emp.DutyHours);
                    myCommand.Parameters.AddWithValue("@BankAccID", emp.BankAccID);
                    myCommand.Parameters.AddWithValue("@CreatedBy", emp.CreatedBy);
                    myCommand.Parameters.AddWithValue("@CreatedOn", emp.CreatedOn);
                    myCommand.Parameters.AddWithValue("@pseudo", emp.pseudo);
                    myCommand.Parameters.AddWithValue("@PayRollEndDate", emp.PayRollEndDate);
                    myCommand.Parameters.AddWithValue("@GradeID", emp.GradeID);
                    myCommand.Parameters.AddWithValue("@AllowRegularity", emp.AllowRegularity);
                    myCommand.Parameters.AddWithValue("@AllowSemiRegulairty", emp.AllowSemiRegulairty);
                    myCommand.Parameters.AddWithValue("@PayRollStartDate", emp.PayRollStartDate);
                    myCommand.Parameters.AddWithValue("@BankCode", emp.BankCode);
                    myCommand.Parameters.AddWithValue("@Workingdays", emp.Workingdays);
                    myReader = myCommand.ExecuteReader();

                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update Successfully.");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.employeedetails where Autoid  = '" + id + @"'";
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

            return new JsonResult("Deleted Successfully.");
        }


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                if (string.IsNullOrWhiteSpace(_env.WebRootPath))
                {
                    _env.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }


        [Route("GetAllDepartmentNames")]
        public JsonResult GetAllDepartmentNames()
        {
            string query = @"select DeptName from dbo.Department";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
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
