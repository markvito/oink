let process = {
	menu:function(){
		let content = <ul><center>
		<h1>HTML</h1>
		<li><a href='#' onClick={process.page1}><button>1. First HTML</button></a></li><br/>
		<li><a href='#' onClick={process.page2}><button>2. Heading Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page3}><button>3. Paragraph Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page4}><button>4. Horizontal Line</button></a></li><br/>
		<li><a href='#' onClick={process.page5}><button>5. Horizontal Line Color</button></a></li><br/>
		<li><a href='#' onClick={process.page6}><button>6. Horizontal Line Size</button></a></li><br/>
		<li><a href='#' onClick={process.page7}><button>7. Horizontal Line Width</button></a></li><br/>
		<li><a href='#' onClick={process.page8}><button>8. Text Formatting</button></a></li><br/>
		<li><a href='#' onClick={process.page9}><button>9. Span Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page10}><button>10. Div Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page11}><button>11. Emphasized Text</button></a></li><br/>
		<li><a href='#' onClick={process.page12}><button>12. Small Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page13}><button>13. Mark Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page14}><button>14. Delete Tag</button></a></li><br/>
		<li><a href='#' onClick={process.page15}><button>15. Insert Tag</button></a></li><br/>
		</center></ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<img src="img/1.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<img src="img/2.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<img src="img/3.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
	
				<center>
				<img src="img/4.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
	
				<center>
				<img src="img/5.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
	
				<center>
				<img src="img/6.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
	
				<center>
				<img src="img/7.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
	
				<center>
				<img src="img/8.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
	
				<center>
				<img src="img/9.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
	
				<center>
				<img src="img/10.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page11:function(){
	let content = <div>
	
				<center>
				<img src="img/11.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page12:function(){
	let content = <div>
	
				<center>
				<img src="img/12.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page13:function(){
	let content = <div>
	
				<center>
				<img src="img/13.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page14:function(){
	let content = <div>
	
				<center>
				<img src="img/14.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page15:function(){
	let content = <div>
	
				<center>
				<img src="img/15.png" height="500" width="300"></img>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center><h1>
				hyper text markup language......
				</h1></center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);