<template>
  <div class="home-page">
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <SingleTask :task="task" @delete="deleteMethod"></SingleTask>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "HomePage",
  components: { SingleTask, FilterNav },
  data() {
    return {
      tasks: [],
      current: "all",
      date: ""
    };
  },
  mounted() {
    fetch(this.backend_url + "/tasks")
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteMethod(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
  computed: {
    filteredTasks() {
      this.date = new Date().getTime();
      if (this.current === "over_due") {
        return this.tasks.filter((task) => task.due_date < this.date);
      } else if (this.current === "ongoing") {
        return this.tasks.filter((task) => task.due_date >= this.date);
      } else {
        return this.tasks;
      }
    },
  },
};
</script>

<style>
.home-page {
  padding: 30px;
}
</style>
