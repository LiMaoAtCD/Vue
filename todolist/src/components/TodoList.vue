<template>
	<div>
		<h1 style="text-align: center;">
			代办清单
		</h1>
		<input type="text" v-model="newItem" placeholder="请输入您要做的事情" @keyup.enter="onEnter">
		<div>
			<ul>
			    <li v-for="item in todos" v-bind:class="{ finished: item.finished}" v-on:click="toggleFinished(item)">{{item.title}}
			    </li>
			</ul>
		</div>
	</div>
	
</template>
<script type="text/javascript">
import Store from '../store'
	export default {
		name: "TodoList",
		data: function() { 
			return {
				msg: "Vue",
				todos: Store.fetch(),
				newItem: ""
			}
		},

		watch: {
			todos: {
				handler: function(val, oldVal) {
					console.log(val)
					Store.save(val);
				},
				deep: true
			}
		},

		methods: {
			toggleFinished: function(item) {
				item.finished = !item.finished
			},
			onEnter: function() {
				this.todos.push({title: this.newItem,finished: false})
				this.newItem = ''
			}
		}
	}
</script>
<style type="text/css">
	.finished {
		text-decoration: line-through;
	}
</style>