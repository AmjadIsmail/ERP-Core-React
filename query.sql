



Create Procedure sp_getDesignation
as
select DesigId, Designation from dbo.Designation




Create Procedure sp_postDesignation
(
@designation1 varchar(100)
)
as
 insert into dbo.Designation (Designation) values (@designation1)



 Create Procedure sp_putDesignation
(
@desid int,
@desname varchar(100)
)
as
update dbo.Designation set Designation  = @desname where DesigID = @desid


Create procedure sp_DeleteDesignation
(
@desid int
)
as
delete from dbo.Designation where DesigID = @desid