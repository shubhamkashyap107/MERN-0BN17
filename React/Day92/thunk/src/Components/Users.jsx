import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDataThunk } from "../Utils/UserSlice"

const Users = () => {
  const data = useSelector((store) => store.user)
  const dispatch = useDispatch()

  useEffect(() => {

    if(data.data.length > 0)
    {
      return
    }

    dispatch(getUserDataThunk())
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ul className="space-y-6">
        {data.data.length > 0 &&
          data.data.map((item) => {
            return (
              <li
                key={item.id}
                className="border-b pb-4 flex flex-col gap-2"
              >
                {/* Name + Username */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <span className="text-sm text-gray-500">
                    @{item.username}
                  </span>
                </div>

                {/* Email + Phone */}
                <div className="text-sm text-gray-600">
                  <p>📧 {item.email}</p>
                  <p>📞 {item.phone}</p>
                </div>

                {/* Website */}
                <div className="text-sm">
                  <a
                    href={`https://${item.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item.website}
                  </a>
                </div>

                {/* Address */}
                <div className="text-sm text-gray-500">
                  <p>
                    {item.address.suite}, {item.address.street}
                  </p>
                  <p>
                    {item.address.city} - {item.address.zipcode}
                  </p>
                </div>

                {/* Company */}
                <div className="text-sm text-gray-700">
                  <p className="font-medium">
                    {item.company.name}
                  </p>
                  <p className="text-gray-500 italic">
                    {item.company.catchPhrase}
                  </p>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Users