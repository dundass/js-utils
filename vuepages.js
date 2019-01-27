var vuepages = vuepages || {};

(function(vp) {

	if(typeof window.Vue === 'undefined') throw new Error('Vue not present on window :(');
	
	Vue.component('page-section', {
		props: ['title', 'content'],
		data
		methods: {},
		template:
			'<div class="section">\
				  <h2>{{ title }}</h2>\
				  <p>{{ content }}</p>\
				  <slot></slot>\
				</div>\
				';
	})
	
	Vue.component('homepage', {
		props: ['title', 'headerimage', 'mailto', 'sections'],
		data: function() { return {} },
		methods: {},
		template: 
			'\
			<div class="container">\
			\
			  <div class="header">\
				<div class="image-container">\
					<img class="header-image" v-bind:src="headerimage" id="headerImage">\
				</div>\
				<h1>{{ title }}</h1>\
			  </div>\
			  \
			  <div class="main">\
				<page-section v-for="section in sections" v-bind:title="section.title" v-bind:content="section.content">{{section.slot ? section.slot : \'\'}}</page-section>\
				<slot></slot>\
				<page-section v-bind:title="\'contact\'">\
				  <p>\
					<a v-bind:href="mailto">\
					{{mailto}}\
					</a>\
				  </p>\
				</page-section>\
			  </div>\
			  \
			</div>';
	});

})(vuepages);