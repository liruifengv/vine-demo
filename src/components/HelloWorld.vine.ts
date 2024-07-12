import { ref } from 'vue'

function ChildComponent() {
  const name = vineProp<string>()
  return vine`
  	<div>Hello {{ name }}</div>
  `
}

function ParentComponent(props: {
  name: string
}) {
  const count = ref(0)
  return vine`
    <button @click="count++">
      counter++
    </button>
    <div>{{count}}</div>
    <ChildComponent :name="name"/>
  `
}

export default ParentComponent