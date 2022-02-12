using sEmployees.Models;

namespace sEmployees.Services;

public static class EmployeesService
{
  static List<Employees> Employees { get; }
  static int nextId = 3;
  static EmployeesService()
  {
    Employees = new List<Employees>
    {
      new Employees {Id = 1, FirstName = "Bob", LastName = "Bouwer", Points = 0},
      new Employees {Id = 2, FirstName = "Jeff", LastName = "Boze", Points = 1},
    };

  }

  public static List<Employees> GetAll() => Employees;

  public static Employees? Get(int id) => Employees.FirstOrDefault(e => e.Id == id);

  public static void add(Employees employee)
  {
    employee.Id = nextId++;
    Employees.Add(employee);
  }
  public static void Delete(int id)
  {
    var employee = Get(id);
    if (employee is null)
      return;
    Employees.Remove(employee);
  }

  public static void Update(Employees employee)
  {
    var index = Employees.FindIndex(e => e.Id == employee.Id);
    if (index == -1)
      return;
    Employees[index] = employee;
  }
}