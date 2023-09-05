<template>
  <div class="task">
    <div class="actions">
      <h3
        @click="showDetail"
        :style="[
          task.priority === 'Low'
            ? { color: 'green' }
            : task.priority === 'Medium'
            ? { color: 'yellow' }
            : { color: 'red' },
        ]"
      >
        {{ task.title }}
      </h3>
      <div class="icons">
        <span>{{ task.priority }}</span>
        <router-link :to="{ name: 'EditTask', params: { id: task.id } }"
          ><span class="material-icons">edit</span></router-link
        >
        <span @click="taskDelete" class="material-icons">delete</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
      <p class="date">
        Created at {{ this.getUTCDate(parseInt(task.created_date)) }}
      </p>
      <p class="date">Due at {{ this.getUTCDate(parseInt(task.due_date)) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      showDetails: false,
      urlThis: `${this.backend_url}/tasks/` + this.task.id,
    };
  },
  methods: {
    showDetail() {
      this.showDetails = !this.showDetails;
    },
    taskDelete() {
      fetch(this.urlThis, { method: "DELETE" }).then(() =>
        this.$emit("delete", this.task.id)
      );
    },
    getUTCDate(data) {
      const date = new Date(data);
      return (
        date.getUTCFullYear() +
        "-" +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getUTCDate()).slice(-2)
      );
    },
  },
};
</script>

<style>
.icons {
  display: flex;
  align-items: center;
}
.task {
  margin: 20px auto;
  background-color: rgba(128, 128, 128, 0.76);
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #d3515b;
}
.material-icons:hover {
  color: #f30b0b;
}
.date {
  font-size: small;
  color: black;
}
</style>
