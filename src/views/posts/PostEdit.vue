<template>
  <div class="editPost">

    <div class="container">
        <form v-on:submit.prevent="onSubmit">
            <input v-model="post.title" type="text" name="title" id="title" placeholder="Titel" />
            <textarea v-model="post.body" name="body" id="body" cols="30" rows="10"></textarea>
            <input v-model="post.publishedDate" type="date" name="publishedDate" id="publishedDate" placeholder="Dato for udgivelse" />
            <button type="submit">Opdater opslag</button>
        </form>
    </div>
  </div>
</template>

<script>
    import * as postService from '../../services/PostService'
    import moment from 'moment';

    export default {
        name: 'post-edit',
        data: function() {
            return {
                post: {
                    title: '',
                    body: '',
                    publishedDate: ''
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            postService.getPostById(to.params.id)
            .then(response => {
                if (!response) {
                    next('/');
                } else {
                    next(vm => {
                        const post = response.data.post;
                        post.publishedDate = moment(post.publishedDate).format('YYYY-MM-DD');
                        vm.post = post;
                    });
                }
            });
        },
        methods: {
            onSubmit: async function() {
                const request = {
                    post: this.post
                }
                await postService.updatePost(request);
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

input {
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
}

input[type='text'],
input[type='date'],
textarea {
    padding: 0 5px;
    border: 2px solid $blue;
    box-sizing: border-box;
}

button {
    display: block;
    width: 100%;
    height: 38px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
}
</style>
