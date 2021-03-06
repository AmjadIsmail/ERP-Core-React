USE [ERP]
GO
/****** Object:  Table [dbo].[AccessDB_DailyAttendance]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccessDB_DailyAttendance](
	[USERID] [int] NOT NULL,
	[CHECKTIME] [datetime] NULL,
	[SSN] [varchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Allowance_Type]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Allowance_Type](
	[AlTypeID] [int] IDENTITY(1,1) NOT NULL,
	[AlTypeName] [varchar](50) NULL,
 CONSTRAINT [PK_Allowance_Type] PRIMARY KEY CLUSTERED 
(
	[AlTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnnualSession]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnnualSession](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[SessionStart] [datetime] NULL,
	[SessionEnd] [datetime] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_AnnualSession] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CommissionDistribution]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommissionDistribution](
	[DistributionId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [int] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[Amount] [decimal](18, 2) NULL,
	[FromDept] [int] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[Modifiedon] [datetime] NULL,
 CONSTRAINT [PK_CommissionDistribution] PRIMARY KEY CLUSTERED 
(
	[DistributionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CommissionSlab]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommissionSlab](
	[SlabID] [int] IDENTITY(1,1) NOT NULL,
	[SlabFrom] [decimal](18, 0) NULL,
	[SlabTo] [decimal](18, 0) NULL,
	[Diffrence] [decimal](18, 0) NULL,
	[Rate] [decimal](18, 2) NULL,
	[CommulativeAmount] [decimal](18, 2) NULL,
	[GradeID] [int] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_CommissionSlab] PRIMARY KEY CLUSTERED 
(
	[SlabID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Daily_Attendance_Leaves]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Daily_Attendance_Leaves](
	[LeaveDetailId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [int] NULL,
	[SSN] [varchar](50) NULL,
	[ShiftDate] [datetime] NULL,
	[LeaveClassID] [int] NULL,
	[Comments] [varchar](500) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_LeaveDetails] PRIMARY KEY CLUSTERED 
(
	[LeaveDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeductionType]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeductionType](
	[DTypeID] [int] IDENTITY(1,1) NOT NULL,
	[DTypeName] [varchar](50) NULL,
 CONSTRAINT [PK_DeductionType] PRIMARY KEY CLUSTERED 
(
	[DTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[DeptID] [int] IDENTITY(1,1) NOT NULL,
	[DeptName] [varchar](50) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[DeptID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designation]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Designation](
	[DesigID] [int] IDENTITY(1,1) NOT NULL,
	[Designation] [varchar](100) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_Designation] PRIMARY KEY CLUSTERED 
(
	[DesigID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmpCommission]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmpCommission](
	[ComID] [int] IDENTITY(1,1) NOT NULL,
	[EmpID] [int] NULL,
	[ComDtFrom] [datetime] NULL,
	[ComDtTo] [datetime] NULL,
	[Amount] [decimal](18, 2) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[Deduction] [decimal](18, 2) NULL,
 CONSTRAINT [PK_EmpCommission] PRIMARY KEY CLUSTERED 
(
	[ComID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmpGrade]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmpGrade](
	[GradeID] [int] IDENTITY(1,1) NOT NULL,
	[GradeName] [varchar](50) NULL,
	[Createdby] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_EmpGrade] PRIMARY KEY CLUSTERED 
(
	[GradeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee_TimeTable]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee_TimeTable](
	[TimeTableID] [int] IDENTITY(1,1) NOT NULL,
	[TimeTableName] [varchar](100) NULL,
	[OnDutyTime] [time](7) NULL,
	[OffDutyTime] [time](7) NULL,
	[LateTimeMints] [int] NULL,
	[LeaveEarlyTimeMints] [int] NULL,
	[BeginningIn] [time](7) NULL,
	[EndingIn] [time](7) NULL,
	[BeginningOut] [time](7) NULL,
	[EndingOut] [time](7) NULL,
	[CountAsWorkDay] [int] NULL,
	[CountAsMinutes] [int] NULL,
	[IsPosted] [bit] NULL,
	[MustCIn] [bit] NULL,
	[MustCOut] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_EmployeeTimeTable] PRIMARY KEY CLUSTERED 
(
	[TimeTableID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeDetails](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeType] [varchar](50) NULL,
	[EmployeeID] [varchar](6) NULL,
	[EmpName] [varchar](100) NULL,
	[LastName] [varchar](100) NULL,
	[Gender] [varchar](10) NULL,
	[MaritalStatus] [varchar](20) NULL,
	[ReligionId] [int] NULL,
	[OtherRelegion] [varchar](50) NULL,
	[NIC] [varchar](20) NULL,
	[ContactNo] [varchar](20) NULL,
	[Address] [varchar](max) NULL,
	[Qualification] [varchar](50) NULL,
	[Other] [varchar](50) NULL,
	[BirthDate] [date] NULL,
	[JoiningDate] [date] NULL,
	[ConfirmDate] [date] NULL,
	[DesignationID] [int] NULL,
	[DepartmentID] [int] NULL,
	[LocationID] [int] NULL,
	[Status] [varchar](50) NULL,
	[IsResigned] [bit] NULL,
	[ResignedDate] [date] NULL,
	[IsActive] [bit] NULL,
	[EOBI] [bit] NULL,
	[EOBINO] [varchar](50) NULL,
	[SESSIMEMBER] [bit] NULL,
	[SESSIID] [varchar](50) NULL,
	[IsPFMember] [bit] NULL,
	[SalaryMode] [varchar](50) NULL,
	[DutyHours] [int] NULL,
	[BankAccID] [varchar](50) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[pseudo] [varchar](100) NULL,
	[PayRollEndDate] [datetime] NULL,
	[GradeID] [int] NULL,
	[AllowRegularity] [bit] NULL,
	[AllowSemiRegulairty] [bit] NULL,
	[PayRollStartDate] [date] NULL,
	[BankCode] [varchar](50) NULL,
	[Workingdays] [int] NULL,
	[PhotoFileName] [varchar](max) NULL,
	[Department] [varchar](50) NULL,
 CONSTRAINT [PK_EmployeeDetails] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeShiftDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeShiftDetails](
	[EmployeeShiftDetailId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeShiftID] [int] NULL,
	[TimeTableID] [int] NULL,
	[DayName] [varchar](50) NULL,
	[ShiftDate] [datetime] NULL,
	[ClockIn] [datetime] NULL,
	[ClockOut] [datetime] NULL,
	[Status] [varchar](50) NULL,
	[LeaveClassID] [int] NULL,
	[ClockInLate] [datetime] NULL,
	[ClockOutEarly] [datetime] NULL,
 CONSTRAINT [PK_EmpShiftDetails] PRIMARY KEY CLUSTERED 
(
	[EmployeeShiftDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeShiftMaster]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeShiftMaster](
	[EmployeeShiftID] [int] IDENTITY(1,1) NOT NULL,
	[ShiftName] [varchar](100) NULL,
	[EmployeeID] [int] NOT NULL,
	[BegginingDate] [datetime] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[CycleUnit] [varchar](50) NULL,
	[CreateBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_EmployeeShiftMaster] PRIMARY KEY CLUSTERED 
(
	[EmployeeShiftID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExtraWorkDays]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExtraWorkDays](
	[WorkRowID] [int] IDENTITY(1,1) NOT NULL,
	[WorkDate] [datetime] NULL,
	[EmpID] [int] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_ExtraWorkDays] PRIMARY KEY CLUSTERED 
(
	[WorkRowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gazatte]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gazatte](
	[GazatID] [int] IDENTITY(1,1) NOT NULL,
	[GazatteName] [varchar](50) NULL,
	[GazatteDate] [datetime] NULL,
	[GtypeID] [int] NULL,
 CONSTRAINT [PK_Gazatte] PRIMARY KEY CLUSTERED 
(
	[GazatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GazatteType]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GazatteType](
	[GTypeId] [int] IDENTITY(1,1) NOT NULL,
	[GazzateTypeName] [varchar](50) NULL,
 CONSTRAINT [PK_GazatteType] PRIMARY KEY CLUSTERED 
(
	[GTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeavesDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeavesDetails](
	[LeaveID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [int] NULL,
	[Casual] [int] NULL,
	[CasualAvail] [int] NULL,
	[Sick] [int] NULL,
	[SickAvail] [int] NULL,
	[WithoutPay] [int] NULL,
	[Annual] [int] NULL,
	[AvailAnnual] [int] NULL,
	[AvailWithoutPay] [int] NULL,
	[Createdby] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_LeavesDetails] PRIMARY KEY CLUSTERED 
(
	[LeaveID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Location]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Location](
	[LocationID] [int] IDENTITY(1,1) NOT NULL,
	[LocationName] [varchar](100) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_Location] PRIMARY KEY CLUSTERED 
(
	[LocationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoginUserLogs]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoginUserLogs](
	[LogID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [varchar](50) NULL,
	[LoginDateTime] [datetime] NULL,
	[IPAddress] [varchar](100) NULL,
	[MachineName] [varchar](100) NULL,
	[Browserinfo] [varchar](max) NULL,
 CONSTRAINT [PK_LoginUserLogs] PRIMARY KEY CLUSTERED 
(
	[LogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MonthlyAdjustments]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MonthlyAdjustments](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[EmpId] [int] NULL,
	[Basic] [int] NULL,
	[Commission] [int] NULL,
	[Bonus] [int] NULL,
	[GazatteAmount] [int] NULL,
	[HouseRent] [int] NULL,
	[ConvAllowence] [int] NULL,
	[Medical] [int] NULL,
	[Fuel] [int] NULL,
	[Meal] [int] NULL,
	[Mobile] [int] NULL,
	[Utility] [int] NULL,
	[OverTime] [int] NULL,
	[Arrear] [int] NULL,
	[Other] [int] NULL,
	[RegularityAndPunctAllowence] [int] NULL,
	[SemiRegularityAndPunctAllowence] [int] NULL,
	[GrossPay] [int] NULL,
	[ProvFund] [int] NULL,
	[TaxAmount] [int] NULL,
	[Late] [int] NULL,
	[AbsentFromLate] [int] NULL,
	[LateDeductions] [int] NULL,
	[Early] [int] NULL,
	[Absent] [int] NULL,
	[AbsentDeduction] [int] NULL,
	[Unpaid] [int] NULL,
	[UnPaidDeduction] [int] NULL,
	[Loan] [int] NULL,
	[Penalty] [int] NULL,
	[eobi] [int] NULL,
	[TotalDeduction] [int] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[casual] [int] NULL,
	[sick] [int] NULL,
	[Annual] [int] NULL,
	[NetGrossPay] [int] NULL,
	[ExtraWorkingDays] [int] NULL,
	[HalfDay] [int] NULL,
	[HalfDayDeductions] [int] NULL,
 CONSTRAINT [PK_MonthlyAdjustments] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MonthlyAdjustments_Temp]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MonthlyAdjustments_Temp](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[EmpId] [int] NULL,
	[Basic] [int] NULL,
	[Commission] [int] NULL,
	[Bonus] [int] NULL,
	[GazatteAmount] [int] NULL,
	[HouseRent] [int] NULL,
	[ConvAllowence] [int] NULL,
	[Medical] [int] NULL,
	[Fuel] [int] NULL,
	[Meal] [int] NULL,
	[Mobile] [int] NULL,
	[Utility] [int] NULL,
	[OverTime] [int] NULL,
	[Arrear] [int] NULL,
	[Other] [int] NULL,
	[RegularityAndPunctAllowence] [int] NULL,
	[SemiRegularityAndPunctAllowence] [int] NULL,
	[GrossPay] [int] NULL,
	[ProvFund] [int] NULL,
	[TaxAmount] [int] NULL,
	[Late] [int] NULL,
	[AbsentFromLate] [int] NULL,
	[LateDeductions] [int] NULL,
	[Early] [int] NULL,
	[Absent] [int] NULL,
	[AbsentDeduction] [int] NULL,
	[Unpaid] [int] NULL,
	[UnPaidDeduction] [int] NULL,
	[Loan] [int] NULL,
	[Penalty] [int] NULL,
	[eobi] [int] NULL,
	[TotalDeduction] [int] NULL,
	[FromDate] [varchar](150) NULL,
	[ToDate] [varchar](150) NULL,
	[CreatedBy] [varchar](150) NULL,
	[CreatedOn] [varchar](150) NULL,
	[ModifiedBy] [varchar](150) NULL,
	[ModifiedOn] [varchar](150) NULL,
	[casual] [int] NULL,
	[sick] [int] NULL,
	[Annual] [int] NULL,
	[NetGrossPay] [int] NULL,
	[ExtraWorkingDays] [int] NULL,
	[HalfDay] [int] NULL,
	[HalfDayDeductions] [int] NULL,
 CONSTRAINT [PK_MonthlyAdjustments_Temp] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollPost]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PayrollPost](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[IsPost] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_PayrollPost] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RegularityAllowence]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegularityAllowence](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[AllowenceName] [varchar](50) NULL,
	[Amount] [int] NULL,
 CONSTRAINT [PK_RegularityAllowence] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Religion]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Religion](
	[Relegion_ID] [int] IDENTITY(1,1) NOT NULL,
	[Relegion_Name] [varchar](50) NULL,
 CONSTRAINT [PK_Religion] PRIMARY KEY CLUSTERED 
(
	[Relegion_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalaryDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalaryDetails](
	[SalaryID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [int] NULL,
	[Basic] [decimal](18, 0) NULL,
	[InComeTax] [decimal](18, 0) NULL,
	[Loan] [decimal](18, 0) NULL,
	[Cola] [decimal](18, 0) NULL,
	[OtherDed] [decimal](18, 0) NULL,
	[MonthDed] [decimal](18, 0) NULL,
	[HouseRent] [decimal](18, 0) NULL,
	[ProvFund] [decimal](18, 0) NULL,
	[BalanceLoan] [decimal](18, 0) NULL,
	[ConvAllowence] [decimal](18, 0) NULL,
	[CostOfLiving] [decimal](18, 0) NULL,
	[Medical] [decimal](18, 0) NULL,
	[Utility] [decimal](18, 0) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifieyBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_SalaryDetails] PRIMARY KEY CLUSTERED 
(
	[SalaryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShiftDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftDetails](
	[ShiftDetailId] [int] IDENTITY(1,1) NOT NULL,
	[ShiftID] [int] NULL,
	[TimeTableID] [int] NULL,
	[DayName] [varchar](50) NULL,
 CONSTRAINT [PK_ShiftDetails] PRIMARY KEY CLUSTERED 
(
	[ShiftDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShiftMaster]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftMaster](
	[ShiftID] [int] IDENTITY(1,1) NOT NULL,
	[ShiftName] [varchar](100) NULL,
	[BegginingDate] [datetime] NULL,
	[CycleUnit] [varchar](50) NULL,
	[CreateBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_ShiftMaster] PRIMARY KEY CLUSTERED 
(
	[ShiftID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaxSlabs]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaxSlabs](
	[TaxSlabId] [int] IDENTITY(1,1) NOT NULL,
	[AmountFrom] [decimal](18, 2) NULL,
	[AmountTo] [decimal](18, 2) NULL,
	[FixTaxAmount] [decimal](18, 2) NULL,
	[DiffrenceRate] [decimal](18, 2) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_TaxSlabs] PRIMARY KEY CLUSTERED 
(
	[TaxSlabId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblAllowence]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblAllowence](
	[autoid] [int] IDENTITY(1,1) NOT NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[Amount] [decimal](18, 2) NULL,
	[EmpID] [int] NULL,
	[TypeId] [int] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_TblAllowence] PRIMARY KEY CLUSTERED 
(
	[autoid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblAnnualLeavesDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblAnnualLeavesDetails](
	[RowID] [int] IDENTITY(1,1) NOT NULL,
	[Employeeid] [int] NULL,
	[EmpName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[pseudo] [varchar](50) NULL,
	[DepartmentID] [int] NULL,
	[DeptName] [varchar](50) NULL,
	[DesignationID] [int] NULL,
	[AllowedAnnual] [int] NULL,
	[Annual] [int] NULL,
	[AllowedCasual] [int] NULL,
	[Casual] [int] NULL,
	[AllowedSick] [int] NULL,
	[Sick] [int] NULL,
	[Maternity] [int] NULL,
	[Unpaid] [int] NULL,
	[Absent] [int] NULL,
	[halfday] [int] NULL,
	[LocationId] [int] NULL,
	[AllowedUnpaid] [int] NULL,
	[SessionID] [int] NULL,
 CONSTRAINT [PK_tblAnnualLeavesDetails] PRIMARY KEY CLUSTERED 
(
	[RowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblBranch]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBranch](
	[BranchID] [int] IDENTITY(1,1) NOT NULL,
	[BranchName] [varchar](50) NULL,
 CONSTRAINT [PK_tblBranch] PRIMARY KEY CLUSTERED 
(
	[BranchID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblChartOfAccounts]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblChartOfAccounts](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[AccountCode] [varchar](200) NULL,
	[AccountName] [varchar](max) NULL,
	[HeadAccCode] [varchar](200) NULL,
	[Description] [varchar](100) NULL,
	[IsDeleted] [bit] NULL,
	[LevelCode] [int] NULL,
	[AccountType] [varchar](50) NULL,
	[OpenBal] [decimal](18, 2) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[BranchId] [int] NULL,
	[OpenBalDebit] [decimal](18, 2) NULL,
	[OpenBalCredit] [decimal](18, 2) NULL,
 CONSTRAINT [PK_tblChartOfAccounts] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblEmpDeductions]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblEmpDeductions](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[EmpId] [int] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[DedTypeID] [int] NULL,
	[Amount] [decimal](18, 2) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_tblEmpDeductions] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblForms]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblForms](
	[FormId] [int] IDENTITY(1,1) NOT NULL,
	[Action] [varchar](50) NULL,
	[Name] [varchar](50) NULL,
	[Controller] [varchar](50) NULL,
	[IsParent] [bit] NULL,
	[ParentId] [int] NULL,
 CONSTRAINT [PK_tblForms] PRIMARY KEY CLUSTERED 
(
	[FormId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblIsbSale]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblIsbSale](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[InvoiceNo] [varchar](50) NULL,
	[BillDate] [datetime] NULL,
	[BillNo] [int] NULL,
	[TicketNumber] [varchar](100) NULL,
	[Airline] [varchar](50) NULL,
	[Customer] [varchar](50) NULL,
	[Passenger] [varchar](100) NULL,
	[Sector] [varchar](50) NULL,
	[Fare] [decimal](10, 2) NULL,
	[Taxes] [decimal](10, 2) NULL,
	[ServiceCharges] [decimal](10, 2) NULL,
	[ReceivableFromClient] [decimal](10, 2) NULL,
	[PaybleToAirlne] [decimal](10, 2) NULL,
	[Vno] [varchar](10) NULL,
	[Createdby] [varchar](50) NULL,
	[Createdon] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[Modifiedon] [datetime] NULL,
	[BankCode] [varchar](50) NULL,
 CONSTRAINT [PK_tblIsbSale] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblLeaveClass]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblLeaveClass](
	[LeaveClassID] [int] IDENTITY(1,1) NOT NULL,
	[LeaveClass] [varchar](500) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_tblLeaveClass] PRIMARY KEY CLUSTERED 
(
	[LeaveClassID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblMonthName]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblMonthName](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[MonthName] [varchar](50) NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_tblMonthName] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblParameters]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblParameters](
	[ParamID] [int] IDENTITY(1,1) NOT NULL,
	[ParamName] [varchar](500) NULL,
	[ParamValue] [int] NULL,
 CONSTRAINT [PK_tblParameters] PRIMARY KEY CLUSTERED 
(
	[ParamID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblPaySlipPrint]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblPaySlipPrint](
	[AutoId] [int] IDENTITY(1,1) NOT NULL,
	[EmpAutoId] [int] NOT NULL,
	[Employeeid] [varchar](20) NOT NULL,
	[EmployeeName] [varchar](50) NOT NULL,
	[Location] [varchar](50) NOT NULL,
	[Department] [varchar](50) NOT NULL,
	[Designation] [varchar](50) NOT NULL,
	[DaysPresent] [int] NOT NULL,
	[Casual] [int] NOT NULL,
	[Sick] [int] NOT NULL,
	[Annual] [int] NOT NULL,
	[Late] [int] NOT NULL,
	[WithoutPay] [int] NOT NULL,
	[Basic] [int] NOT NULL,
	[Commission] [int] NOT NULL,
	[ExtraWorkDays] [int] NOT NULL,
	[Bonus] [int] NOT NULL,
	[Gazzate] [int] NOT NULL,
	[Conveyance] [int] NOT NULL,
	[OverTime] [int] NOT NULL,
	[Arrear] [int] NOT NULL,
	[Other] [int] NOT NULL,
	[Regularity] [int] NOT NULL,
	[SemiRegularity] [int] NOT NULL,
	[GrossPay] [int] NOT NULL,
	[NetGrossPay] [int] NOT NULL,
	[Incometax] [int] NOT NULL,
	[ProvFund] [int] NOT NULL,
	[Lateded] [int] NOT NULL,
	[Absent] [int] NOT NULL,
	[Unpaid] [int] NOT NULL,
	[Loan] [int] NOT NULL,
	[Penalty] [int] NOT NULL,
	[Eobi] [int] NOT NULL,
	[OtherAllownce] [int] NOT NULL,
	[TotalDeduction] [int] NOT NULL,
	[Salary] [int] NOT NULL,
	[MonthName] [varchar](50) NOT NULL,
	[PayRollMonth] [varchar](50) NULL,
	[JoiningDate] [datetime] NULL,
	[EmployeeStatus] [varchar](50) NULL,
	[HalfDayDeduction] [int] NULL,
 CONSTRAINT [PK_tblPaySlipPrint] PRIMARY KEY CLUSTERED 
(
	[AutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblPrintVoucher]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblPrintVoucher](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[VoucherCode] [varchar](50) NULL,
	[VoucherDate] [datetime] NULL,
	[AccountName] [varchar](100) NULL,
	[AccountCode] [varchar](100) NULL,
	[Narration] [varchar](100) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Remarks] [varchar](100) NULL,
	[VoucherType] [varchar](50) NULL,
	[Heading] [varchar](100) NULL,
	[MasterAccountCode] [varchar](100) NULL,
	[MasterAccountName] [varchar](100) NULL,
	[ChqNumber] [varchar](100) NULL,
	[ChqDate] [varchar](100) NULL,
	[Doc] [image] NULL,
 CONSTRAINT [PK_TblPrintVoucher] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblUsers]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUsers](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [varchar](50) NULL,
	[UserName] [varchar](50) NULL,
	[Password] [nvarchar](500) NULL,
	[Email] [varchar](50) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[EmpID] [int] NULL,
	[IsAdmin] [bit] NULL,
	[IsAccMember] [bit] NULL,
	[IsBranchAdmin] [bit] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVoucherDetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVoucherDetails](
	[DetailID] [int] IDENTITY(1,1) NOT NULL,
	[VoucherID] [int] NULL,
	[AccountCode] [varchar](200) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Remarks] [varchar](500) NULL,
	[Status] [varchar](50) NULL,
 CONSTRAINT [PK_tblVoucherDetails] PRIMARY KEY CLUSTERED 
(
	[DetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVoucherMaster]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVoucherMaster](
	[VoucherID] [int] IDENTITY(1,1) NOT NULL,
	[VoucherCode] [varchar](200) NULL,
	[VoucherDate] [datetime] NULL,
	[AccountCode] [varchar](100) NULL,
	[ChqNumber] [varchar](100) NULL,
	[ChqDate] [datetime] NULL,
	[Narration] [varchar](max) NULL,
	[VocherType] [int] NULL,
	[IsPost] [bit] NULL,
	[ReferenceNumber] [varchar](max) NULL,
	[IsDeleted] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
	[BranchId] [int] NULL,
	[documenturl] [varchar](max) NULL,
	[Pic] [image] NULL,
 CONSTRAINT [PK_tblVoucherMaster] PRIMARY KEY CLUSTERED 
(
	[VoucherID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVoucherType]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVoucherType](
	[Autoid] [int] IDENTITY(1,1) NOT NULL,
	[TypeId] [int] NULL,
	[TypeName] [varchar](50) NULL,
 CONSTRAINT [PK_tblVoucherType] PRIMARY KEY CLUSTERED 
(
	[Autoid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tempBanktransferdetails]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tempBanktransferdetails](
	[RowID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [varchar](50) NULL,
	[AutoID] [int] NULL,
	[EmpName] [varchar](50) NULL,
	[Pseudo] [varchar](50) NULL,
	[BankACCID] [varchar](50) NULL,
	[BankCode] [varchar](50) NULL,
	[DeptID] [int] NULL,
	[DeptName] [varchar](50) NULL,
	[InHandSalary] [int] NULL,
	[PayRollMonth] [varchar](50) NULL,
 CONSTRAINT [PK_tempBanktransferdetails] PRIMARY KEY CLUSTERED 
(
	[RowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TempPaySlip]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TempPaySlip](
	[Empautoid] [int] NULL,
	[employeeid] [varchar](20) NULL,
	[empname] [varchar](50) NULL,
	[pseudo] [varchar](50) NULL,
	[deptid] [int] NULL,
	[deptname] [varchar](20) NULL,
	[basic] [int] NULL,
	[commission] [int] NULL,
	[bonus] [int] NULL,
	[gazatteamount] [int] NULL,
	[houserent] [int] NULL,
	[ConvAllowence] [int] NULL,
	[medical] [int] NULL,
	[fuel] [int] NULL,
	[meal] [int] NULL,
	[mobile] [int] NULL,
	[utilty] [int] NULL,
	[overtime] [int] NULL,
	[arrear] [int] NULL,
	[other] [int] NULL,
	[Regular] [int] NULL,
	[semiregular] [int] NULL,
	[grosspay] [int] NULL,
	[provfund] [int] NULL,
	[taxamount] [int] NULL,
	[late] [int] NULL,
	[absentfromlate] [int] NULL,
	[latedeductions] [int] NULL,
	[early] [int] NULL,
	[absent] [int] NULL,
	[absentded] [int] NULL,
	[unpaid] [int] NULL,
	[unpaidded] [int] NULL,
	[loan] [int] NULL,
	[penalty] [int] NULL,
	[eobi] [int] NULL,
	[casual] [int] NULL,
	[sick] [int] NULL,
	[annual] [int] NULL,
	[totded] [int] NULL,
	[inhandsalary] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tempTaxProposals]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tempTaxProposals](
	[RowID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [varchar](500) NULL,
	[AutoID] [int] NULL,
	[EmpName] [varchar](100) NULL,
	[Pseudo] [varchar](100) NULL,
	[NIC] [varchar](50) NULL,
	[NIC2] [varchar](50) NULL,
	[TaxAmount] [int] NULL,
	[NetGrossPay] [int] NULL,
	[DeptID] [int] NULL,
	[DeptName] [varchar](50) NULL,
	[InHandSalary] [int] NULL,
	[PayRollMonth] [varchar](100) NULL,
 CONSTRAINT [PK_tempTaxProposals] PRIMARY KEY CLUSTERED 
(
	[RowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TimeTable]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeTable](
	[TimeTableID] [int] IDENTITY(1,1) NOT NULL,
	[TimeTableName] [varchar](100) NULL,
	[OnDutyTime] [time](7) NULL,
	[OffDutyTime] [time](7) NULL,
	[LateTimeMints] [int] NULL,
	[LeaveEarlyTimeMints] [int] NULL,
	[BeginningIn] [time](7) NULL,
	[EndingIn] [time](7) NULL,
	[BeginningOut] [time](7) NULL,
	[EndingOut] [time](7) NULL,
	[CountAsWorkDay] [int] NULL,
	[CountAsMinutes] [int] NULL,
	[IsPosted] [bit] NULL,
	[MustCIn] [bit] NULL,
	[MustCOut] [bit] NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_TimeTable] PRIMARY KEY CLUSTERED 
(
	[TimeTableID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserFoms]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserFoms](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[FormID] [int] NULL,
	[IsAccess] [bit] NULL,
 CONSTRAINT [PK_UserFoms] PRIMARY KEY CLUSTERED 
(
	[AutoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Departments] ON 

INSERT [dbo].[Departments] ([DeptID], [DeptName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (1, N'Accounts', NULL, NULL, NULL, NULL)
INSERT [dbo].[Departments] ([DeptID], [DeptName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (3, N'IT technology', NULL, NULL, NULL, NULL)
INSERT [dbo].[Departments] ([DeptID], [DeptName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (5, N'Sales', NULL, NULL, NULL, NULL)
INSERT [dbo].[Departments] ([DeptID], [DeptName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (6, N'Admin', NULL, NULL, NULL, NULL)
INSERT [dbo].[Departments] ([DeptID], [DeptName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (8, N'Scedule Change', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Departments] OFF
SET IDENTITY_INSERT [dbo].[Designation] ON 

INSERT [dbo].[Designation] ([DesigID], [Designation], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (1, N'QA Analyst', NULL, NULL, NULL, NULL)
INSERT [dbo].[Designation] ([DesigID], [Designation], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (2, N'IT Officer', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Designation] OFF
SET IDENTITY_INSERT [dbo].[EmpGrade] ON 

INSERT [dbo].[EmpGrade] ([GradeID], [GradeName], [Createdby], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (1, N'Grade ', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[EmpGrade] OFF
SET IDENTITY_INSERT [dbo].[EmployeeDetails] ON 

INSERT [dbo].[EmployeeDetails] ([AutoID], [EmployeeType], [EmployeeID], [EmpName], [LastName], [Gender], [MaritalStatus], [ReligionId], [OtherRelegion], [NIC], [ContactNo], [Address], [Qualification], [Other], [BirthDate], [JoiningDate], [ConfirmDate], [DesignationID], [DepartmentID], [LocationID], [Status], [IsResigned], [ResignedDate], [IsActive], [EOBI], [EOBINO], [SESSIMEMBER], [SESSIID], [IsPFMember], [SalaryMode], [DutyHours], [BankAccID], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [pseudo], [PayRollEndDate], [GradeID], [AllowRegularity], [AllowSemiRegulairty], [PayRollStartDate], [BankCode], [Workingdays], [PhotoFileName], [Department]) VALUES (2, N'Perminent', N'10002', N'Ravi', N'Monver', N'male', N'Married', 4, N'', N'123465654', N'121221212', N'Karachi', N'BS', NULL, CAST(N'1997-01-02' AS Date), CAST(N'2013-01-01' AS Date), CAST(N'2013-03-01' AS Date), 1, 1, 1, NULL, 0, NULL, 1, 0, NULL, NULL, NULL, NULL, N'Transfer', 9, NULL, N'Amjad', CAST(N'2022-03-01T00:00:00.000' AS DateTime), NULL, NULL, N'amjad', NULL, 1, 1, 1, NULL, NULL, 30, NULL, NULL)
INSERT [dbo].[EmployeeDetails] ([AutoID], [EmployeeType], [EmployeeID], [EmpName], [LastName], [Gender], [MaritalStatus], [ReligionId], [OtherRelegion], [NIC], [ContactNo], [Address], [Qualification], [Other], [BirthDate], [JoiningDate], [ConfirmDate], [DesignationID], [DepartmentID], [LocationID], [Status], [IsResigned], [ResignedDate], [IsActive], [EOBI], [EOBINO], [SESSIMEMBER], [SESSIID], [IsPFMember], [SalaryMode], [DutyHours], [BankAccID], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [pseudo], [PayRollEndDate], [GradeID], [AllowRegularity], [AllowSemiRegulairty], [PayRollStartDate], [BankCode], [Workingdays], [PhotoFileName], [Department]) VALUES (3, N'Perminent', N'10003', N'Saqibs', N'Amins', N'male', N'Married', 1, N'', N'123465654', N'121221212', N'Karachi', N'BS', NULL, CAST(N'1997-01-02' AS Date), CAST(N'2013-01-01' AS Date), CAST(N'2013-03-01' AS Date), 1, 1, 1, NULL, 0, NULL, 1, 0, NULL, NULL, NULL, NULL, N'Transfer', 9, NULL, N'Amjad', CAST(N'2022-03-01T00:00:00.000' AS DateTime), NULL, NULL, N'Saqib', NULL, 1, 1, 1, NULL, NULL, 30, NULL, NULL)
INSERT [dbo].[EmployeeDetails] ([AutoID], [EmployeeType], [EmployeeID], [EmpName], [LastName], [Gender], [MaritalStatus], [ReligionId], [OtherRelegion], [NIC], [ContactNo], [Address], [Qualification], [Other], [BirthDate], [JoiningDate], [ConfirmDate], [DesignationID], [DepartmentID], [LocationID], [Status], [IsResigned], [ResignedDate], [IsActive], [EOBI], [EOBINO], [SESSIMEMBER], [SESSIID], [IsPFMember], [SalaryMode], [DutyHours], [BankAccID], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [pseudo], [PayRollEndDate], [GradeID], [AllowRegularity], [AllowSemiRegulairty], [PayRollStartDate], [BankCode], [Workingdays], [PhotoFileName], [Department]) VALUES (4, N'Perminent', N'10004', N'Furqan', N'Malik', N'male', N'Married', 4, N'', N'123465654', N'121221212', N'Karachi', N'BS', NULL, CAST(N'1997-01-02' AS Date), CAST(N'2013-01-01' AS Date), CAST(N'2013-03-01' AS Date), 1, 1, 1, NULL, 0, NULL, 1, 0, NULL, NULL, NULL, NULL, N'Transfer', 9, NULL, N'Amjad', CAST(N'2022-03-01T00:00:00.000' AS DateTime), NULL, NULL, N'Saqib', NULL, 1, 1, 1, NULL, NULL, 30, NULL, NULL)
SET IDENTITY_INSERT [dbo].[EmployeeDetails] OFF
SET IDENTITY_INSERT [dbo].[Location] ON 

INSERT [dbo].[Location] ([LocationID], [LocationName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (1, N'Karachi', NULL, NULL, NULL, NULL)
INSERT [dbo].[Location] ([LocationID], [LocationName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (2, N'Lahore', NULL, NULL, NULL, NULL)
INSERT [dbo].[Location] ([LocationID], [LocationName], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (3, N'Islam abad', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Location] OFF
SET IDENTITY_INSERT [dbo].[Religion] ON 

INSERT [dbo].[Religion] ([Relegion_ID], [Relegion_Name]) VALUES (1, N'Islam')
INSERT [dbo].[Religion] ([Relegion_ID], [Relegion_Name]) VALUES (2, N'Israili')
INSERT [dbo].[Religion] ([Relegion_ID], [Relegion_Name]) VALUES (3, N'Cristian')
INSERT [dbo].[Religion] ([Relegion_ID], [Relegion_Name]) VALUES (4, N'Hindu')
SET IDENTITY_INSERT [dbo].[Religion] OFF
ALTER TABLE [dbo].[CommissionDistribution]  WITH CHECK ADD  CONSTRAINT [FK_CommissionDistribution_Departments] FOREIGN KEY([FromDept])
REFERENCES [dbo].[Departments] ([DeptID])
GO
ALTER TABLE [dbo].[CommissionDistribution] CHECK CONSTRAINT [FK_CommissionDistribution_Departments]
GO
ALTER TABLE [dbo].[CommissionDistribution]  WITH CHECK ADD  CONSTRAINT [FK_CommissionDistribution_EmployeeDetails] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[CommissionDistribution] CHECK CONSTRAINT [FK_CommissionDistribution_EmployeeDetails]
GO
ALTER TABLE [dbo].[CommissionSlab]  WITH CHECK ADD  CONSTRAINT [FK_CommissionSlab_EmpGrade] FOREIGN KEY([GradeID])
REFERENCES [dbo].[EmpGrade] ([GradeID])
GO
ALTER TABLE [dbo].[CommissionSlab] CHECK CONSTRAINT [FK_CommissionSlab_EmpGrade]
GO
ALTER TABLE [dbo].[Daily_Attendance_Leaves]  WITH CHECK ADD  CONSTRAINT [FK_LeaveDetails_EmployeeDetails] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[Daily_Attendance_Leaves] CHECK CONSTRAINT [FK_LeaveDetails_EmployeeDetails]
GO
ALTER TABLE [dbo].[Daily_Attendance_Leaves]  WITH CHECK ADD  CONSTRAINT [FK_LeaveDetails_tblLeaveClass] FOREIGN KEY([LeaveClassID])
REFERENCES [dbo].[tblLeaveClass] ([LeaveClassID])
GO
ALTER TABLE [dbo].[Daily_Attendance_Leaves] CHECK CONSTRAINT [FK_LeaveDetails_tblLeaveClass]
GO
ALTER TABLE [dbo].[EmpCommission]  WITH CHECK ADD  CONSTRAINT [FK_EmpCommission_EmployeeDetails] FOREIGN KEY([EmpID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[EmpCommission] CHECK CONSTRAINT [FK_EmpCommission_EmployeeDetails]
GO
ALTER TABLE [dbo].[EmployeeDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeDetails_Departments] FOREIGN KEY([DepartmentID])
REFERENCES [dbo].[Departments] ([DeptID])
GO
ALTER TABLE [dbo].[EmployeeDetails] CHECK CONSTRAINT [FK_EmployeeDetails_Departments]
GO
ALTER TABLE [dbo].[EmployeeDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeDetails_Designation] FOREIGN KEY([DesignationID])
REFERENCES [dbo].[Designation] ([DesigID])
GO
ALTER TABLE [dbo].[EmployeeDetails] CHECK CONSTRAINT [FK_EmployeeDetails_Designation]
GO
ALTER TABLE [dbo].[EmployeeDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeDetails_EmpGrade] FOREIGN KEY([GradeID])
REFERENCES [dbo].[EmpGrade] ([GradeID])
GO
ALTER TABLE [dbo].[EmployeeDetails] CHECK CONSTRAINT [FK_EmployeeDetails_EmpGrade]
GO
ALTER TABLE [dbo].[EmployeeDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeDetails_Location] FOREIGN KEY([LocationID])
REFERENCES [dbo].[Location] ([LocationID])
GO
ALTER TABLE [dbo].[EmployeeDetails] CHECK CONSTRAINT [FK_EmployeeDetails_Location]
GO
ALTER TABLE [dbo].[EmployeeDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeDetails_Religion] FOREIGN KEY([ReligionId])
REFERENCES [dbo].[Religion] ([Relegion_ID])
GO
ALTER TABLE [dbo].[EmployeeDetails] CHECK CONSTRAINT [FK_EmployeeDetails_Religion]
GO
ALTER TABLE [dbo].[EmployeeShiftDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeShiftDetails_Employee_TimeTable] FOREIGN KEY([TimeTableID])
REFERENCES [dbo].[Employee_TimeTable] ([TimeTableID])
GO
ALTER TABLE [dbo].[EmployeeShiftDetails] CHECK CONSTRAINT [FK_EmployeeShiftDetails_Employee_TimeTable]
GO
ALTER TABLE [dbo].[EmployeeShiftDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeShiftDetails_EmployeeShiftMaster] FOREIGN KEY([EmployeeShiftID])
REFERENCES [dbo].[EmployeeShiftMaster] ([EmployeeShiftID])
GO
ALTER TABLE [dbo].[EmployeeShiftDetails] CHECK CONSTRAINT [FK_EmployeeShiftDetails_EmployeeShiftMaster]
GO
ALTER TABLE [dbo].[EmployeeShiftMaster]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeShiftMaster_EmployeeDetails] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[EmployeeShiftMaster] CHECK CONSTRAINT [FK_EmployeeShiftMaster_EmployeeDetails]
GO
ALTER TABLE [dbo].[ExtraWorkDays]  WITH CHECK ADD  CONSTRAINT [FK_ExtraWorkDays_EmployeeDetails] FOREIGN KEY([EmpID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[ExtraWorkDays] CHECK CONSTRAINT [FK_ExtraWorkDays_EmployeeDetails]
GO
ALTER TABLE [dbo].[Gazatte]  WITH CHECK ADD  CONSTRAINT [FK_Gazatte_GazatteType] FOREIGN KEY([GtypeID])
REFERENCES [dbo].[GazatteType] ([GTypeId])
GO
ALTER TABLE [dbo].[Gazatte] CHECK CONSTRAINT [FK_Gazatte_GazatteType]
GO
ALTER TABLE [dbo].[GazatteType]  WITH CHECK ADD  CONSTRAINT [FK_GazatteType_GazatteType] FOREIGN KEY([GTypeId])
REFERENCES [dbo].[GazatteType] ([GTypeId])
GO
ALTER TABLE [dbo].[GazatteType] CHECK CONSTRAINT [FK_GazatteType_GazatteType]
GO
ALTER TABLE [dbo].[LeavesDetails]  WITH CHECK ADD  CONSTRAINT [FK_LeavesDetails_EmployeeDetails] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[LeavesDetails] CHECK CONSTRAINT [FK_LeavesDetails_EmployeeDetails]
GO
ALTER TABLE [dbo].[MonthlyAdjustments]  WITH CHECK ADD  CONSTRAINT [FK_MonthlyAdjustments_EmployeeDetails] FOREIGN KEY([EmpId])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[MonthlyAdjustments] CHECK CONSTRAINT [FK_MonthlyAdjustments_EmployeeDetails]
GO
ALTER TABLE [dbo].[SalaryDetails]  WITH CHECK ADD  CONSTRAINT [FK_SalaryDetails_EmployeeDetails] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[SalaryDetails] CHECK CONSTRAINT [FK_SalaryDetails_EmployeeDetails]
GO
ALTER TABLE [dbo].[ShiftDetails]  WITH CHECK ADD  CONSTRAINT [FK_ShiftDetails_ShiftMaster] FOREIGN KEY([ShiftID])
REFERENCES [dbo].[ShiftMaster] ([ShiftID])
GO
ALTER TABLE [dbo].[ShiftDetails] CHECK CONSTRAINT [FK_ShiftDetails_ShiftMaster]
GO
ALTER TABLE [dbo].[ShiftDetails]  WITH CHECK ADD  CONSTRAINT [FK_ShiftDetails_TimeTable] FOREIGN KEY([TimeTableID])
REFERENCES [dbo].[TimeTable] ([TimeTableID])
GO
ALTER TABLE [dbo].[ShiftDetails] CHECK CONSTRAINT [FK_ShiftDetails_TimeTable]
GO
ALTER TABLE [dbo].[TblAllowence]  WITH CHECK ADD  CONSTRAINT [FK_TblAllowence_Allowance_Type] FOREIGN KEY([TypeId])
REFERENCES [dbo].[Allowance_Type] ([AlTypeID])
GO
ALTER TABLE [dbo].[TblAllowence] CHECK CONSTRAINT [FK_TblAllowence_Allowance_Type]
GO
ALTER TABLE [dbo].[TblAllowence]  WITH CHECK ADD  CONSTRAINT [FK_TblAllowence_EmployeeDetails] FOREIGN KEY([EmpID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[TblAllowence] CHECK CONSTRAINT [FK_TblAllowence_EmployeeDetails]
GO
ALTER TABLE [dbo].[tblChartOfAccounts]  WITH CHECK ADD  CONSTRAINT [FK_tblChartOfAccounts_tblBranch] FOREIGN KEY([BranchId])
REFERENCES [dbo].[tblBranch] ([BranchID])
GO
ALTER TABLE [dbo].[tblChartOfAccounts] CHECK CONSTRAINT [FK_tblChartOfAccounts_tblBranch]
GO
ALTER TABLE [dbo].[tblEmpDeductions]  WITH CHECK ADD  CONSTRAINT [FK_tblEmpDeductions_DeductionType] FOREIGN KEY([DedTypeID])
REFERENCES [dbo].[DeductionType] ([DTypeID])
GO
ALTER TABLE [dbo].[tblEmpDeductions] CHECK CONSTRAINT [FK_tblEmpDeductions_DeductionType]
GO
ALTER TABLE [dbo].[tblEmpDeductions]  WITH CHECK ADD  CONSTRAINT [FK_tblEmpDeductions_EmployeeDetails] FOREIGN KEY([EmpId])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[tblEmpDeductions] CHECK CONSTRAINT [FK_tblEmpDeductions_EmployeeDetails]
GO
ALTER TABLE [dbo].[tblUsers]  WITH CHECK ADD  CONSTRAINT [FK_tblUsers_EmployeeDetails] FOREIGN KEY([EmpID])
REFERENCES [dbo].[EmployeeDetails] ([AutoID])
GO
ALTER TABLE [dbo].[tblUsers] CHECK CONSTRAINT [FK_tblUsers_EmployeeDetails]
GO
ALTER TABLE [dbo].[tblUsers]  WITH CHECK ADD  CONSTRAINT [FK_Users_Users] FOREIGN KEY([AutoID])
REFERENCES [dbo].[tblUsers] ([AutoID])
GO
ALTER TABLE [dbo].[tblUsers] CHECK CONSTRAINT [FK_Users_Users]
GO
ALTER TABLE [dbo].[tblVoucherMaster]  WITH CHECK ADD  CONSTRAINT [FK_tblVoucherMaster_tblBranch] FOREIGN KEY([BranchId])
REFERENCES [dbo].[tblBranch] ([BranchID])
GO
ALTER TABLE [dbo].[tblVoucherMaster] CHECK CONSTRAINT [FK_tblVoucherMaster_tblBranch]
GO
ALTER TABLE [dbo].[tblVoucherMaster]  WITH CHECK ADD  CONSTRAINT [FK_tblVoucherMaster_tblVoucherType] FOREIGN KEY([VocherType])
REFERENCES [dbo].[tblVoucherType] ([Autoid])
GO
ALTER TABLE [dbo].[tblVoucherMaster] CHECK CONSTRAINT [FK_tblVoucherMaster_tblVoucherType]
GO
/****** Object:  StoredProcedure [dbo].[sp_getemployees]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[sp_getemployees]
(
@autoid varchar(20) = null
)
as

if isnull(@autoid,0) = 0
begin
select * from EmployeeDetails
end
else
begin
select * from EmployeeDetails where AutoID = @autoid
end
GO
/****** Object:  StoredProcedure [dbo].[sp_updateemployee]    Script Date: 3/2/2022 2:50:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[sp_updateemployee]
(
@Autoid int = 0,
@EmployeeType varchar(20) = null,
@EmployeeID varchar(20) = null,
@EmpName varchar(50) = null,
@LastName varchar(50) = null,
@Gender varchar(50) = null,
@MaritalStatus varchar(50) = null,
@ReligionId varchar(50) = null,
@OtherRelegion varchar(50) = null,
@NIC varchar(50) = null,
@ContactNo varchar(50) = null,
@Address varchar(50) = null,
@Qualification varchar(50) = null,
@Other varchar(50) = null,
@BirthDate varchar(50) = null,
@JoiningDate varchar(50) = null,
@ConfirmDate varchar(50) = null,
@DesignationID varchar(50) = null,
@DepartmentID varchar(50) = null,
@LocationID varchar(50) = null,
@Status varchar(50) = null,
@IsResigned varchar(50) = null,
@ResignedDate varchar(50) = null,
@IsActive varchar(50) = null,
@EOBI varchar(50) = null,
@EOBINO varchar(50) = null,
@SESSIMEMBER varchar(50) = null,
@SESSIID varchar(50) = null,
@IsPFMember varchar(50) = null,
@SalaryMode varchar(50) = null,
@DutyHours varchar(50) = null,
@BankAccID varchar(50) = null,
@CreatedBy varchar(50) = null,
@CreatedOn varchar(50) = null,
@ModifiedBy varchar(50) = null,
@ModifiedOn varchar(50) = null,
@pseudo varchar(50) = null,
@PayRollEndDate varchar(50) = null,
@GradeID varchar(50) = null,
@AllowRegularity varchar(50) = null,
@AllowSemiRegulairty varchar(50) = null,
@PayRollStartDate varchar(50) = null,
@BankCode varchar(50) = null,
@Workingdays varchar(50) = null,
@PhotoFileName varchar(50) = null,
@Department varchar(50) = null

)
as

if @Autoid = 0
begin
insert into employeedetails
(
EmployeeType ,EmployeeID,EmpName,LastName,Gender,MaritalStatus,ReligionId,OtherRelegion,NIC,
ContactNo,Address,Qualification,Other,BirthDate,JoiningDate,ConfirmDate,DesignationID,DepartmentID,
LocationID,Status,IsResigned,ResignedDate,IsActive,EOBI,EOBINO,SESSIMEMBER,SESSIID,IsPFMember,SalaryMode,
DutyHours,BankAccID,CreatedBy,CreatedOn,ModifiedBy,ModifiedOn,pseudo,PayRollEndDate,GradeID,AllowRegularity,
AllowSemiRegulairty,PayRollStartDate,BankCode,Workingdays,PhotoFileName,Department

)
values
(
@EmployeeType ,@EmployeeID,@EmpName,@LastName,@Gender,@MaritalStatus,@ReligionId,@OtherRelegion,@NIC,
@ContactNo,@Address,@Qualification,@Other,@BirthDate,@JoiningDate,@ConfirmDate,@DesignationID,@DepartmentID,
@LocationID,@Status,@IsResigned,@ResignedDate,@IsActive,@EOBI,@EOBINO,@SESSIMEMBER,@SESSIID,@IsPFMember,@SalaryMode,
@DutyHours,@BankAccID,@CreatedBy,@CreatedOn,@ModifiedBy,@ModifiedOn,@pseudo,@PayRollEndDate,@GradeID,@AllowRegularity,
@AllowSemiRegulairty,@PayRollStartDate,@BankCode,@Workingdays,@PhotoFileName,@Department
)
end

else

begin
 
 update EmployeeDetails 
 set 
EmployeeType = @EmployeeType ,EmployeeID = @EmployeeID,EmpName =@EmpName,LastName=@LastName,Gender=@Gender,MaritalStatus=@MaritalStatus,ReligionId=@ReligionId,OtherRelegion=@OtherRelegion,NIC=@NIC,
ContactNo=@ContactNo,Address=@Address,Qualification=@Qualification,Other=@Other,BirthDate=@BirthDate,JoiningDate=@JoiningDate,ConfirmDate=@ConfirmDate,DesignationID=@DesignationID,DepartmentID=@DepartmentID,
Locationid =@LocationID,status= @Status, isresigned =@IsResigned, ResignedDate = @ResignedDate,IsActive= @IsActive,eobi= @EOBI,EOBINO = @EOBINO,
SESSIMEMBER = @SESSIMEMBER,SESSIID= @SESSIID,IsPFMember= @IsPFMember,SalaryMode = @SalaryMode,
DutyHours=@DutyHours, BankAccID=@BankAccID,ModifiedBy= @ModifiedBy,ModifiedOn= @ModifiedOn,pseudo= @pseudo,PayRollEndDate= @PayRollEndDate,GradeID= @GradeID ,AllowRegularity= @AllowRegularity,
AllowSemiRegulairty= @AllowSemiRegulairty,PayRollStartDate= @PayRollStartDate,BankCode= @BankCode,Workingdays= @Workingdays,PhotoFileName= @PhotoFileName,Department =  @Department
where AutoID = @Autoid
end
GO
