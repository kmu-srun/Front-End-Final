import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
	header: {
		height: 500,
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText
	},
	cardHeader: {
		backgroundColor: theme.palette.primary[800],
		color: theme.palette.getContrastText(theme.palette.primary[800])
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	  },
	  selectEmpty: {
		marginTop: theme.spacing(2),
	  },

}));

export default function MatchingIdx1() {
	const classes = useStyles();

	const [state, setState] = React.useState({
		code: '',
		name: 'hai',
	  });

	const inputLabel = React.useRef(null);
  	const [labelWidth, setLabelWidth] = React.useState(0);
  	React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

   const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

	return (
		<div>	
			<div className={clsx(classes.header, 'flex')}>
				<div className="p-24 w-full max-w-2xl mx-auto">
					<div className="text-center my-128 mx-24">
						<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
							<Typography variant="h2" color="inherit" className="font-light">
								Let's Go Battle!
							</Typography>
						</FuseAnimate>

						<FuseAnimate duration={400} delay={600}>
							<Typography
								variant="subtitle1"
								color="inherit"
								className="opacity-75 mt-16 mx-auto max-w-512"
							>
								Start Random Matching if you click matching button!
							</Typography>
						</FuseAnimate>
					</div>
				</div>
			</div>

			<div className="-mt-192">
				<div className="w-full max-w-2xl mx-auto">
					<FuseAnimateGroup
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
						className="flex items-center justify-center flex-wrap"
					>
						<div className="w-full max-w-320 sm:w-1/3 p-12">
							<Card square>
								<div className={clsx(classes.cardHeader, 'px-24 py-16')}>
									<Typography variant="subtitle1" color="inherit">
										Player Name
									</Typography>
								</div>

								<CardContent className="p-32">
									<div className="flex justify-center">
										{/* <Typography variant="h5" color="textSecondary">
											$
										</Typography> */}
										<div className="flex items-end">
											<Typography className="text-72 mx-4 font-light leading-none">
											<div><img src="assets/images/profile/2.jpg" alt="user profile"/></div>
											</Typography>
										</div>
									</div>

									<Divider className="my-32" />

									<div className="flex flex-col">
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Win/Lose</span>
											13/4
										</Typography>
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Country</span>
											Kor
										</Typography>
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Technology</span>
											Python
										</Typography>
									</div>
								</CardContent>

								<div className="flex justify-center pb-32">
									<Button variant="contained" color="primary" className="w-128">
										View more profile
									</Button>
								</div>
							</Card>
						</div>

						<div className="w-full max-w-320 sm:w-1/3 p-12">
							<Card className="relative" raised>
								<div className="p-32 text-center">
									<Typography className="text-32"> Concave </Typography>
									<Typography color="textSecondary" className="text-16 font-medium">
										Battle game
									</Typography>
								</div>

								<CardContent className="text-center p-0">
									<div className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}>
										<div className="flex justify-center">
											{/* <Typography color="inherit" className="font-medium">
												$
											</Typography> */}
											<Typography
												color="inherit"
												className="text-32 mx-4 font-light leading-none"
											>
												<div><img src="assets/images/games/4.jpg" alt="user profile"/></div>
											</Typography>
										</div>
										{/* <Typography color="inherit" className="mx-4">
											monthly per user
										</Typography> */}
									</div>

									<div className="flex flex-col p-32">
										<Typography className="text-20"> GameRule </Typography>
										<Typography color="textSecondary" className="mb-16">
											GameRule~~~
										</Typography>
										<div> 　 </div>
										<Typography className="text-20"> Select Your Code </Typography>
										<FormControl variant="outlined" className={classes.formControl}>
											<InputLabel ref={inputLabel} htmlFor="outlined-code-native-simple">
												Code
        									</InputLabel>
											<Select
												native
												value={state.code}
												onChange={handleChange('code')}
												labelWidth={labelWidth}
												inputProps={{
													name: 'code',
													id: 'outlined-code-native-simple',
												}}
											>
												<option value="" />
												<option value={10}>CODE-1</option>
												<option value={20}>CODE-2</option>
												<option value={30}>CODE-3</option>
											</Select>
										</FormControl>
										
										{/* <Typography color="textSecondary">Advanced reporting</Typography>
										<Typography color="textSecondary">Customizable interface</Typography>
										<Typography color="textSecondary">CRM Integration</Typography> */}
									</div>
								</CardContent>

								<div className="flex flex-col items-center justify-center pb-32 px-32" >
									<Button href="/apps/game/matching2/MatchingIdx2Page" variant="contained" color="primary" className="w-full">
										Matching
									</Button>
									{/* <Typography color="textSecondary" className="mt-16">
										30 day free trial to startn
									</Typography> */}
								</div>
							</Card>
						</div>

						<div className="w-full max-w-320 sm:w-1/3 p-12">
							<Card square>
								<div className={clsx(classes.cardHeader, 'px-24 py-16')}>
									<Typography variant="subtitle1" color="inherit">
										?
									</Typography>
								</div>

								<CardContent className="p-32">
									<div className="flex justify-center">
										{/* <Typography variant="h5" color="textSecondary" className="font-medium">
											$
										</Typography> */}
										<div className="flex items-end">
											<Typography className="text-72 mx-4 font-light leading-none">
											<div><img src="assets/images/profile/2.jpg" alt="user profile"/></div>
											</Typography>
											{/* <Typography variant="subtitle1" color="textSecondary">
												/ month
											</Typography> */}
										</div>
									</div>

									<Divider className="my-32" />

									<div className="flex flex-col">
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Win/Lose</span>
											?
										</Typography>
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Country</span>
											?
										</Typography>
										<Typography variant="subtitle1" className="">
											<span className="font-bold mx-4">Technology</span>
											?
										</Typography>
									</div>
								</CardContent>

								<div className="flex justify-center pb-32">
									{/* <Button variant="contained" color="secondary" className="w-128">
										View more profile
									</Button> */}
								</div>
							</Card>
						</div>
					</FuseAnimateGroup>

					{/* <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
						<Typography variant="h4" className="pb-32 font-light">
							Frequently Asked Questions
						</Typography> */}

						{/* <div className="flex flex-wrap w-full">
							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">How does free trial work?</Typography>
								<Typography className="text-16" color="textSecondary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue
									tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
								</Typography>
							</div>

							{/* <div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">Can I cancel any time?</Typography>
								<Typography className="text-16" color="textSecondary">
									Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
									quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
								</Typography>
							</div>

							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
								<Typography className="text-16" color="textSecondary">
									Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
									quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
								</Typography>
							</div>

							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">Can I have a discount?</Typography>
								<Typography className="text-16" color="textSecondary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue
									tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
								</Typography>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}