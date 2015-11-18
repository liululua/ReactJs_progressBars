var Main = React.createClass({displayName: "Main",

  // Initialize State of component
    
    getInitialState: function(props) {
    	
        return {
        	
            // Intialize the state of component 
        
            
            progressBars: [ 
                            {value:'10', label: 'ProgressBar1',id:'progressBar1'},
                            {value:'10', label: 'ProgressBar2',id:'progressBar2'},
                            {value:'10', label: 'ProgressBar3',id:'progressBar3'}],
            // default value for select option
            selectedProgressBar: 'progressBar1'
            
        }    
    },
    handleChange: function (event) {
    	// handle change in select option
        var progressBarId = this.refs.progressBarsSelection.getDOMNode().value;
        this.state.selectedProgressBar = progressBarId;
        console.log(this.state.selectedProgressBar);
    },
   
       handleClick: function (event) {
      // describe your behaviour .
        var selected = this.state.selectedProgressBar;
        console.log(selected);
        var inputValue = event.target.value;
        for(var i=0; i < this.state.progressBars.length ; i++ )
        {
        	if(this.state.progressBars[i].id == selected)
        	{
        		var newValue = parseInt(this.state.progressBars[i].value) + parseInt(inputValue) ;
        		if(newValue < 0)
        	    {
        	    	newValue = 0;
        	    }
        	    this.state.progressBars[i].value = newValue;
        	}
        }
      
        this.forceUpdate();
    }, 
    render: function () {

          

    	return (

          React.createElement("div", {className: "container"}, 

	      React.createElement("h1", {className: "text-center"}, " Progress Bar Demo "), 
           React.createElement("br", null), 
         React.createElement(ProgressBarGroup, {options: this.state.progressBars}), 
           React.createElement("br", null), 
       React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "col-sm-3"}, 
       React.createElement("select", {ref: "progressBarsSelection", onChange: this.handleChange}, 

                   this.state.progressBars.map(function(progressBar)
                     
                     {
                        return React.createElement("option", {value: progressBar.id}, progressBar.id, " ")
                     }
                  )
                  
      )
      ), 
      
      React.createElement("div", {className: "col-sm-9"}, 
      React.createElement("button", {className: "btn btn-default pull-right", onClick: this.handleClick, value: "25"}, 
        "25"
      ), 
       React.createElement("button", {className: "btn btn-default pull-right", onClick: this.handleClick, value: "10"}, 
        "10"
      ), 
       React.createElement("button", {className: "btn btn-default pull-right", onClick: this.handleClick, value: "-10"}, 
        "-10"
      ), 
      React.createElement("button", {className: "btn btn-default pull-right", onClick: this.handleClick, value: "-25"}, 
         "-25"
      )
      )
      )
       
          )
          
        );    	
    }
});