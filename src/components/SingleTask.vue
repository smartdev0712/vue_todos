<template>
  <div class="task">
    <div class="actions">
      <h3
        @click="showDetail"
        :style="[
          task.priority === 'low' ? { color: 'green' } : { color: 'red' },
          { color: 'yellow' },
        ]"
      >
        {{ task.title }}
      </h3>
      <div class="icons">
        <router-link :to="{ name: 'Edittask', params: { id: task.id } }"
          ><span class="material-icons">edit</span></router-link
        >
        <span @click="taskDelete" class="material-icons">delete</span>
        <span>{{ task.priority }}</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      showDetails: false,
      urlThis: `${process.env.BACKEND_URL}/tasks/` + this.task.id,
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
  },
};
</script>

<style>
.task {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 10px solid red;
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
  color: #bbb;
}
.material-icons:hover {
  color: #777;
}
</style>
