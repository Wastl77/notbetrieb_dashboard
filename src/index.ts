import express, { Request, Response } from 'express';

const app = express();

app.use(
	express.static('/Users/sebastianbeier/Code/notbetrieb_dashboard/static'),
);

app.get('/', (req: Request, res: Response) => {
	res.sendFile(
		'/Users/sebastianbeier/Code/notbetrieb_dashboard/src/index.html',
	);
});

app.listen(8000, () => {
	console.log('listening on port 8000');
});
