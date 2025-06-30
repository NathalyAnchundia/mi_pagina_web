body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color:rgb(240, 240, 240);
  text-align: center;
}

h1 {
  color: #333;
}

.controls {
  margin-bottom: 20px;
}

input[type="url"] {
  width: 300px;
  padding: 8px;
}

button {
  padding: 8px 12px;
  margin-left: 5px;
  cursor: pointer;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.gallery img {
  width: 150px;
  height: 100px;
  object-fit: cover;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.gallery img:hover {
  transform: scale(1.05);
}

.selected {
  box-shadow: 0 0 10px 5px #007bff;
  border: 3px solid #007bff;
}