import React, { useState, useEffect } from "react";

function Services() {
  const [backendData, setBackendData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [freeFriends, setFreeFriends] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Додайте с

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const handleForm = async () => {
    try {
      // Валідувати обрану дату
      if (!selectedDate || new Date(selectedDate).toString() === "Invalid Date") {
        setError("Обрано невірну дату");
        return;
      } else {
        setError("");
      }

      // Встановити стан завантаження
      setLoading(true);

      //Здійснити виклик API для отримання вільних друзів на підставі обраних критеріїв
      const apiUrl = `http://localhost:5000/api/friends/date/${selectedDate}`;
      const response = await fetch(apiUrl);
      const data = await response.json();


      // Встановити freeFriends та скинути стан завантаження
      setFreeFriends(data);
      setLoading(false);
    } catch (error) {
      console.error("Помилка при отриманні вільних друзів:", error);
      setLoading(false);
    }
  };
  

  return (
    <div className="container">
      <form className="col-4">
        <div>
          <span>Вибери подію: </span>
          <select
            className="form-select"
            aria-label="Select Event"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            {backendData.map((ev) => (
              <option key={ev.event_id} value={ev.name}>
                {ev.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="datepicker">Select a date:</label>
          <input
            type="date"
            id="datepicker"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          {error && <p className="text-danger">{error}</p>}
        </div>
        <div>
          <span>Вибери тип події: </span>
          <select
            className="form-select"
            aria-label="Select Event Type"
            value={selectedEventType}
            onChange={(e) => setSelectedEventType(e.target.value)}
          >
            <option>Одний друг</option>
            <option>Група друзів</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleForm}
        >
          Знайти вільних друзів
        </button>
      </form>
      {/* Таблиця для виведення результатів */}
      <div className="mt-4">
        <h3>Вільні друзі:</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ім'я друга</th>
              <th scope="col">Телефон</th>
              {/* Додайте інші необхідні стовпці */}
            </tr>
          </thead>
          <tbody>
            {freeFriends.map((friend) => (
              <tr key={friend.friend_id}>
                <td>{friend.name}</td>
                <td>{friend.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
