export default function DataTable({ data, columns }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-slate-700 text-sm text-slate-400">
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-4 font-medium">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item._id}
            className="border-b border-slate-800 transition-colors duration-200 hover:bg-slate-800/60"
          >
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-4">
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
