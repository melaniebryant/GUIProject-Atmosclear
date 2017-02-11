import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			{/*We create a navbar here (see https://framework7.io/docs/navbar.html )*/}
			<div class={"navbar " + style.navbar}>  {/*We add the navbar class but add an extra class to override some css rules for our design (see style.less)*/}
				<div class="navbar-inner">
					<div class="left">
						<a href="#" data-panel="left" class="link open-panel"><i class="icon icon-bars"></i></a> {/*This is an icon wrapped with a link tag that serves as a button to trigger the left settings panel (handled by framework 7) */}
					</div>
					<div class="center sliding">Atmosclear</div> {/*App title here*/}
					<div class="right">
						<a href="#" class="link icon-only"><i class="material-icons">brightness_4</i></a> {/*This is an icon wrapped with a link tag that should be used to switch on night mode*/}
					</div>
				</div>
			</div>
		);
	}
}
