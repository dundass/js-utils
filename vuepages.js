var vuepages = vuepages || {};

(function(vp) {

	if(typeof window.Vue === 'undefined') throw new Error('Vue not present on window :(');
	
	Vue.component('page-section', {
		props: ['title', 'paragraphs'],
		data: function() { return {} },
		methods: {},
		template:
			'<div class="section">\
				  <h2>{{ title }}</h2>\
				  <p v-for="paragraph in paragraphs" v-html="paragraph"></p>\
				  <slot></slot>\
				</div>\
				'
	})
	
	Vue.component('homepage', {
		props: ['title', 'headerimage', 'mailto', 'contactblurb', 'sections'],
		data: function() { return {} },
		methods: {},
		template: 
			'\
			<div class="container">\
			\
			  <div class="header">\
				<div class="image-container" v-show="headerimage">\
					<img class="header-image" v-bind:src="headerimage" id="headerImage">\
				</div>\
				<h1>{{ title }}</h1>\
			  </div>\
			  \
			  <div class="main">\
				<page-section v-for="section in sections" v-bind:title="section.title" v-bind:paragraphs="section.paragraphs">{{section.slot ? section.slot : \'\'}}</page-section>\
				<slot></slot>\
				<page-section v-bind:title="\'contact\'">\
				  <p>{{contactblurb}}</p>\
				  <p>\
					<a v-bind:href="mailto">\
					{{mailto}}\
					</a>\
				  </p>\
				</page-section>\
			  </div>\
			  \
			</div>'
	});

})(vuepages);