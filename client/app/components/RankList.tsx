import {ChevronDownIcon} from '@heroicons/react/outline'
const employees = [
  {
    id: 1,
    name: 'Jhon Doe',
    points: 10827,
    rank: 1,
  },
  {
    id: 2,
    name: 'Ben Dover',
    points: 9881,
    rank: 2,
  },
  {
    id: 3,
    name: 'Mike Slong',
    points: 8224,
    rank: 3,
  },
  {
    id: 4,
    name: 'Dick Dock',
    points: 7224,
    rank: 4,
  },
];

const getOrdinal = (x: number) => {
  const last = +String(x).slice(-1);
  console.log(last);
  switch (last % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const List = employees.map((employee, index) => {
  let rank: string | number;
  switch (employee.rank) {
    case 1:
      rank = '🥇';
      break;
    case 2:
      rank = '🥈';
      break;
    case 3:
      rank = '🥉';
      break;
    default:
      rank = employee.rank + getOrdinal(employee.rank);
      break;
  }
  return (
    <tr key={index} className="border-b border-gray-300">
      <td className="w-1/3">{rank}</td>
      <td className="w-1/3">{employee.name}</td>
      <td className="w-1/3">{employee.points}</td>
      <td className="px-2 flex-grow-0 cursor-pointer">
        <ChevronDownIcon className='w-5 h-5' />
      </td>
    </tr>
  );
});

const RankList = () => {
  return (
    <section>
      <h2 className="text-4xl font-black text-center text-slate-800 uppercase mb-4">
        📋 ranking lijst 📋
      </h2>
      <div className="mx-8">
        <table className="table-auto text-center w-full border-collapse">
          <thead className="uppercase text-slate-800">
            <tr className="border-b-4 border-slate-800 text-2xl">
              <th>rank🏅</th>
              <th>naam👨‍🎓</th>
              <th>punten🎯</th>
            </tr>
          </thead>
          <tbody className="text-xl">{List}</tbody>
        </table>
      </div>
    </section>
  );
};

export default RankList;
