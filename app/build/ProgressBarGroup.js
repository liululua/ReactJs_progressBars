var ProgressBarGroup = React.createClass({displayName: "ProgressBarGroup",

    	 render: function () {
         return (
            React.createElement("div", null, 
              this.props.options.map(function(optionChild) {
                return (
                 React.createElement(ProgressBar, {value: optionChild.value, key: optionChild.id, option: optionChild}
                  )
                );

           }
            )
           )

         );
     }
 });
	 