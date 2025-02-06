<script setup>
import { ref, onMounted, watch } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import useDragAndDrop from "@/tools/useDnD";
import FormNode from "@/components/FormNode.vue";
import CreateForm from "@/components/CreateForm.vue";
const { onConnect, addEdges } = useVueFlow();
const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop();
import { Close } from "@element-plus/icons-vue";
import { usePageStore } from "@/stores/page";
const pageStore = usePageStore();

// 定義節點
const nodes = ref([
  {
    id: "ss_dndnode_0",
    type: "form",
    dimensions: {
      width: 172,
      height: 90,
    },
    computedPosition: {
      x: 262,
      y: 66,
      z: 0,
    },
    handleBounds: {
      source: [
        {
          id: null,
          position: "bottom",
          nodeId: "dndnode_0",
          type: "source",
          x: 77.5,
          y: 86.5,
          width: 17,
          height: 7,
        },
      ],
      target: [
        {
          id: null,
          position: "top",
          nodeId: "dndnode_0",
          type: "target",
          x: 77.5,
          y: -3.5,
          width: 17,
          height: 7,
        },
      ],
    },
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: {
      x: 262,
      y: 66,
    },
    data: {
      id: "ss_dndnode_0",
      label: "表單",
      description: "",
      content: {
        formName: "設備採購申請表",
        formId: "form01",
        formurgencyLevel: "3",
        formFields: [
          {
            id: "Stext_01",
            type: "Stext",
            name: "caption",
            label: "名稱",
            width: 300,
            isRequired: "1",
          },
          {
            id: 2,
            type: "Sselect",
            name: "priority",
            label: "優先權",
            items: [
              { value: "1", label: "普通" },
              { value: "2", label: "優先" },
              { value: "3", label: "急件" },
            ],
            isRequired: "1",
          },
          {
            id: 3,
            type: "Mselect",
            name: "cause",
            label: "事由",
            items: [
              { value: "1", label: "DNS" },
              { value: "2", label: "公用糟" },
              { value: "3", label: "電腦維修" },
            ],
            isRequired: "1",
          },
          {
            id: 4,
            type: "Mtext",
            name: "intro",
            label: "說明",
            width: 10,
            hight: 5,
            isRequired: "0",
          },
        ],
      },
    },
    events: {},
  },
]);
const edges = ref([]);
const nodeTypes = ref({
  form: markRaw(FormNode), // 將 'form-node' 類型對應到 FormNode 組件
});
onConnect(addEdges);
</script>

<template id="create-page">
  <div class="counter" @drop="onDrop">
    <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      :nodeTypes="nodeTypes"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <Background :size="2" :gap="20" pattern-color="#BDBDBD" />
    </VueFlow>
  </div>
  <Sidebar />
  <div
    style="
      position: absolute;
      top: 0;
      right: 0;
      height: 80dvh;
      max-width: 500px;
      overflow-y: scroll;
    "
  >
    <pre>{{ JSON.stringify(nodes, null, 2) }}</pre>
    <!-- <p>{{ edges }}</p> -->
  </div>
  <div
    v-if="pageStore.createFormPage"
    style="
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100dvw;
      height: 100dvh;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.25);
    "
  >
    <div
      style="
        position: relative;
        z-index: 100;
        overflow: auto;
        width: 55%;
        height: 80%;
        background-color: #f6f6f6;
        padding: 5% 3% 1% 3%;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        border-radius: 5px;
      "
    >
      <el-icon
        style="
          position: absolute;
          top: 0;
          right: 0;
          padding: 20px;
          cursor: pointer;
        "
        size="large"
        @click="pageStore.createFormPage = false"
      >
        <Close />
      </el-icon>

      <div>
        <CreateForm />
      </div>
    </div>
  </div>
</template>
<style scoped lang="css">
.counter {
  display: flex;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  margin: 0;
  box-sizing: border-box;
}
</style>
