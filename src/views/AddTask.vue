<template>
  <form @submit.prevent="TaskSubmit">
    <label>Name:</label>
    <br />
    <input type="text" v-model="title" required />
    <br />
    <label>Description:</label>
    <br />
    <textarea v-model="details" required></textarea>
    <br />
    <label>Due Date:</label>
    <br />
    <input type="date" v-model="due_date" required />
    <br />
    <label>Priority:</label>
    <br />
    <select v-model="priority">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>
    <br />
    <button>Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      due_date: 0,
      priority: "",
    };
  },
  methods: {
    TaskSubmit() {
      let newTask = {
        title: this.title,
        details: this.details,
        due_date: new Date(this.due_date).getTime(),
        priority: this.priority,
      };
      console.log("new task payload", newTask);
      fetch(`${process.env.BACKEND_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      })
        .then(() => this.$router.push("/homePage"))
        .catch((err) => console.log(err.name));
    },
  },
};
</script>

<style>
form {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
select {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: green;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
}
</style>
