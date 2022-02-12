using sEmployees.Models;
using sEmployees.Services;
using Microsoft.AspNetCore.Mvc;

namespace sEmployees.controller;

[ApiController]
[Route("[controller]")]
public class EmployeesController : ControllerBase
{
  // Get All
  [HttpGet]
  public ActionResult<List<Employees>> GetAll() => EmployeesService.GetAll();
  // Get Single
  [HttpGet("{id}")]
  public ActionResult<Employees> Get(int id)
  {
    var employee = EmployeesService.Get(id);
    if (employee == null)
      return NotFound();
    return employee;
  }
  // Post
  [HttpPost]
  public IActionResult Create(Employees employee)
  {
    EmployeesService.add(employee);
    return CreatedAtAction(nameof(Create), new { id = employee.Id }, employee);
  }
  // Put
  [HttpPut("{id}")]
  public IActionResult Update(int id, Employees employee)
  {
    if (id != employee.Id)
      return BadRequest();
    var existingEmployee = EmployeesService.Get(id);
    if (existingEmployee is null)
      return NotFound();
    EmployeesService.Update(employee);
    return NoContent();
  }
  // Delete
  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    var employee = EmployeesService.Get(id);
    if (employee is null)
      return NotFound();
    EmployeesService.Delete(id);
    return NoContent();
  }
}