

var ProgressBar = React.createClass({displayName: "ProgressBar",

	 render: function () {

         var widthPercentage = this.props.option.value + "%";
         if(parseInt(this.props.option.value) <= 100)
         var colorRender = "progress-bar";
         else
         var colorRender = "progress-bar-danger";
         return (
            
            React.createElement("div", {className: "progress", ref: this.props.option.id, id: this.props.option.id}, 
            React.createElement("div", {className: colorRender, role: "progressbar", "aria-valuenow": this.props.option.value, 
             "aria-valuemin": "0", style: { width: widthPercentage}}, 
            React.createElement("span", {className: "text-center"}, " ", this.props.option.value, " %")
            )
            )
         );
	 }
});