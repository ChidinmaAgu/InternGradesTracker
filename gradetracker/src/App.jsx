import  { useState } from 'react';
import './App.css';

function App() {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: 'John adamu',
      picture: 'https://th.bing.com/th?id=OIP.KdBSw8TPL34eU6T7bjhpAAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      info: 'Web 3 Intern',
      department: 'Web 3',
      grading: 85,
    },
    {
      id: 2,
      name: 'Chidinma Agu',
      picture: 'https://th.bing.com/th?id=OIP.0iG7xinjnxYwduQCGJs1rQHaKX&w=211&h=295&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      info: 'Frontend engineering Intern',
      department: 'Software Engineering',
      grading: 92,
    },
    {
      id: 3,
      name: 'Benjamin ovu',
      picture: 'https://th.bing.com/th?id=OIP.UqBpcgqEGf_hVgChMv1kKAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      info: 'Backend Intern',
      department: 'Software Engineering',
      grading: 78,
    },
    {
      id: 4,
      name: 'Favour Akujobi ',
      picture: 'https://th.bing.com/th?id=OIP.O04oqzX_nVxg5iKkjtVmfQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      info: 'Design Intern',
      department: 'Product Design',
      grading: 88,
    },
  ]);

  const [filterDepartment, setFilterDepartment] = useState('All');

  const handleDepartmentFilterChange = (event) => {
    setFilterDepartment(event.target.value);
  };

  const filteredInterns = filterDepartment === 'All' ? interns : interns.filter(intern => intern.department === filterDepartment);

  const sortByName = () => {
    const sortedInterns = [...filteredInterns].sort((a, b) => a.name.localeCompare(b.name));
    setInterns(sortedInterns);
  };

  const sortByGrading = () => {
    const sortedInterns = [...filteredInterns].sort((a, b) => b.grading - a.grading);
    setInterns(sortedInterns);
  };

  const findTopIntern = () => {
    let topIntern = filteredInterns.reduce((prev, current) => (prev.grading > current.grading ? prev : current));
    return topIntern;
  };

  const topIntern = findTopIntern();

  return (
    <div className="app">
      <h1>Interns Assignment Scores</h1>
      <div className="filter">
        <label htmlFor="departmentFilter">Filter by Department:</label>
        <select id="departmentFilter" value={filterDepartment} onChange={handleDepartmentFilterChange}>
          <option value="All">All Departments</option>
          <option value="Web 3">Web 3</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Product Design">Product Design</option>
        </select>
      </div>
      <div className="sort">
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByGrading}>Sort by Grading</button>
      </div>
      <div className="interns-list">
        {filteredInterns.map((intern) => (
          <div key={intern.id} className="intern-card">
            <img src={intern.picture} alt={intern.name} />
            <div className="intern-info">
              <h2>{intern.name}</h2>
              <p>{intern.info}</p>
              <p>Department: {intern.department}</p>
              <p>Grading: {intern.grading}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="top-intern">
        <h2>Top Intern</h2>
        <div className="intern-card">
          <img src={topIntern.picture} alt={topIntern.name} />
          <div className="intern-info">
            <h2>{topIntern.name}</h2>
            <p>{topIntern.info}</p>
            <p>Department: {topIntern.department}</p>
            <p>Grading: {topIntern.grading}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;