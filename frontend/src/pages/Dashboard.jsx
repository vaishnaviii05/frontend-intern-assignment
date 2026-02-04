import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const fetchProfile = async () => {
    const res = await api.get("/me");
    setUser(res.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title, completed: false });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {user && (
            <p className="text-sm text-gray-600">
              Logged in as <strong>{user.name}</strong> ({user.email})
            </p>
          )}
        </div>

        <button
          onClick={logout}
          className="text-red-600 font-medium"
        >
          Logout
        </button>
      </div>

      <input
        className="border p-2 mb-4 w-full rounded"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Enter new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {filteredTasks.length === 0 && (
          <p className="text-gray-500 text-center">No tasks found</p>
        )}

        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-3 rounded shadow flex justify-between"
          >
            <span>{task.title}</span>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
