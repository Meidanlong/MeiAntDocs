<template>
	<div class="home-base">
		aaba
		
		<a-card hoverable style="width: 300px">
		    <img
		      slot="cover"
		      alt="example"
		      src="https://s2.ax1x.com/2020/01/15/lOcW1H.jpg"
		    />
		    <template slot="actions" class="ant-card-actions">
		      <a-icon key="setting" type="setting" />
		      <a-icon key="edit" type="edit" />
		      <a-icon key="ellipsis" type="ellipsis" />
		    </template>
		    <a-card-meta title="Card title" description="This is the description">
		      <a-avatar
		        slot="avatar"
		        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		      />
		    </a-card-meta>
		  </a-card>
		  
		  <a-card hoverable style="width: 240px">
		      <img
		        slot="cover"
		        alt="example"
		        src="https://s2.ax1x.com/2020/02/10/1Iixwd.png"
		      />
		      <a-card-meta title="Europe Street beat">
		        <template slot="description">
		          www.instagram.com
		        </template>
		      </a-card-meta>
		</a-card>
		<a-button>
			<router-link to="backend">后端</router-link>
		</a-button>
	</div>
	
</template>

<script>
	export default {
	  name: 'home',
	  data() {
	    return {};
	  },
	}
</script>

<style>
	
	.home-base: {
		padding: 0;
		margin:0;
		width: 100%;
		text-align: center; 
	}
</style>
