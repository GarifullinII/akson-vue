<template>
	<div class='post'>
		<div>
      <div>
        {{post.id}}
      </div>
			<div>
        <strong>Name:</strong>
        {{ post.title }}
      </div>
			<div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
		</div>
		<div class='post__btn'>
      <it-button
          @click='$router.push(`/pages/${post.id}`)'
      >
        Open
      </it-button>
			<it-button
				@click="$emit('remove', post)"
			>
				Delete
			</it-button>
		</div>
	</div>
</template>

<script>
export default {
props: {
	post: {
		type: Object,
		required: true,
	}
}
}
</script>

<style scoped>
.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.post__btn {
  display: flex;
}
</style>
