<script setup>
import useDragAndDrop from "@/tools/useDnD";
import FormNode from "@/components/FormNode.vue";

const { onDragStart } = useDragAndDrop();
</script>

<template>
  <aside>
    <div class="sidebar">
      <div
        class="vue-flow__node-default vue-flow__node-form"
        :draggable="true"
        @dragstart="onDragStart($event, 'form')"
      >
        表單
      </div>
      <div
        class="vue-flow__node-input"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        開始
      </div>

      <div
        class="vue-flow__node-default"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        事件
      </div>

      <div
        class="vue-flow__node-output"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        結束
      </div>
    </div>
  </aside>
</template>

<style scoped lang="css">
aside {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: #fff;
  font-weight: 700;
  padding: 15px 10px;
  font-size: 12px;
  background: #d9d9d988;
  box-shadow: 0 5px 10px #0000004d;
  box-sizing: border-box;
}
.sidebar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3%;
  height: 100%;
}

aside .nodes > * {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 2px #00000040;
}
</style>
