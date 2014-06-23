var AnimateDemoCtrl = function ($scope) {
	$scope.model = {
		visible: true,
		scale: true,
		move: true,
		height: true
	}
	$scope.text1 = "The ngAnimate module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.";
	$scope.text2 = "To see animations in action, all that is required is to define the appropriate CSS classes or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are: ngRepeat, ngInclude, ngIf, ngSwitch, ngShow, ngHide, ngView and ngClass. Custom directives can take advantage of animation by using the $animate service.";
};
