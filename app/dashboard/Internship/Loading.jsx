// components/usersData/UserTableSkeleton.jsx
import LoadingSkeleton from "../../../components/UserLoading/page";

export default function InternTableSkeleton({ rows = 5 }) {
  return (
    <>
      {Array(rows)
        .fill(0)
        .map((_, idx) => (
          <tr key={idx} className="border-t">
           
            <td colSpan={8}>
              <div className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center mt-2">
                {/* Left content */}
                <div className="flex flex-col gap-2">
                  <LoadingSkeleton width="500px" height="20px" />
                  <LoadingSkeleton width="600px" height="20px" />
                </div>

                {/* Right actions */}
                <div className="flex gap-2">
                  <LoadingSkeleton width="10px" height="20px" />
                  <LoadingSkeleton width="10px" height="20px" />
                </div>
              </div>
            </td>
          </tr>
        ))}
    </>
  );
}
