<template>
	<form @submit.prevent>
		<h3>
			Create post
		</h3>
		<it-input
			v-model='post.title'
			type='text' 
			placeholder='Name'
		/>
		<it-input 
			v-model='post.body'
			type='text' 
			placeholder='Description'
		/>
		<it-button
			class='btn'
			@click='createPost'
			style='margin-top: 15px'
		>
			Add post
		</it-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: ''
			}
		}
	},
	methods: {
		createPost() {
		this.post.id = Date.now();
		this.$emit('create', this.post)
		this.post = {
				title: '',
				body: ''
			}
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}
</style>