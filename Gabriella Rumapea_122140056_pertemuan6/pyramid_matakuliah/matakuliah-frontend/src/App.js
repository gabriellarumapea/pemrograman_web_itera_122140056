import React, { useState, useEffect } from "react";

export default function App() {
  const [matakuliah, setMatakuliah] = useState([]);
  const [loading, setLoading] = useState(true);

  // State buat form tambah
  const [form, setForm] = useState({
    kode_mk: "",
    nama_mk: "",
    sks: "",
    semester: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:6543/api/matakuliah")
      .then((res) => res.json())
      .then((data) => {
        setMatakuliah(data.matakuliah);
        setLoading(false);
      });
  }, []);

  // Handler input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handler submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:6543/api/matakuliah", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setMatakuliah([...matakuliah, data.matakuliah]);
        setForm({ kode_mk: "", nama_mk: "", sks: "", semester: "" });
      });
  };

  return (
    <div>
      <h1>Daftar Matakuliah</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          name="kode_mk"
          placeholder="Kode MK"
          value={form.kode_mk}
          onChange={handleChange}
          required
        />
        <input
          name="nama_mk"
          placeholder="Nama MK"
          value={form.nama_mk}
          onChange={handleChange}
          required
        />
        <input
          name="sks"
          type="number"
          placeholder="SKS"
          value={form.sks}
          onChange={handleChange}
          required
        />
        <input
          name="semester"
          type="number"
          placeholder="Semester"
          value={form.semester}
          onChange={handleChange}
          required
        />
        <button type="submit">Tambah</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {matakuliah.map((mk) => (
            <li key={mk.id}>
              <b>{mk.kode_mk}</b> - {mk.nama_mk} ({mk.sks} SKS, Semester {mk.semester})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
