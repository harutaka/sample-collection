import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Weight from '../components/weight';
import Picture from '../components/picture';

function Lastupdated(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Last updated: {new Date(props.timestamp).toLocaleString()}
    </Typography>
  );
}

function Egg(props) {
  const eggTitle = props.eggTitle;

  // 卵の数が範囲外でも補正
  let amount = props.amount;
  if (props.amount === 0) {
    amount = 0;
  } else if (!props.amount) {
    amount = 5;
  }
  amount = Math.max(amount, 0);
  amount = Math.min(amount, 6);
  const circleStr = String(amount);

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary">
        {eggTitle}
      </Typography>
      <Typography component="h2" variant="h6" color="primary">
        {`　残量: ${circleStr}`}
      </Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  item: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  weightHeight: {
    height: 100,
  }
}));

export default function Refrigerator() {
  const classes = useStyles();
  const weightHeightPaper = clsx(classes.item, classes.weightHeight);

  const [items, setItems] = useState({
    item1: "loading...",
    item2: "loading...",
    item3: "loading...",
    item4: "loading...",
    item5: "loading...",
    item6: "loading..."
  });
  const [weight, setWeight] = useState({});
  const [title, setTitle] = useState("loading...");
  const [fewItemName, setFewItemName] = useState("loading...");
  const [inside1, setInside1] = useState("../static/inside-1.jpg");  // 本来はメインサーバー指定だが廃止したためデフォルトをローカル指定
  const [inside2, setInside2] = useState("../static/inside-2.jpg");  // 本来はメインサーバー指定だが廃止したためデフォルトをローカル指定
  const [bestItemUrl, setBestItemUrl] = useState("https://store.shopping.yahoo.co.jp/rainbowmart/4901777247680-3.html");  // 仮

  useEffect(() => {
    // クエリの取得はサーバー処理が入ってよければ、getInitialPropsで取得するのが楽だが、
    // 静的サイト構築時はプリコンパイルが入るため使えない。
    // useRouterを使ってクエリを取得する方法もあるが、初回はトップレベルではなぜか取得できない。
    // useEffectの中ではwindowモジュールを使えるため、ここでクエリ取得する。
    let queryObj = [...new URLSearchParams(window.location.search).entries()]
      .reduce((obj, e) => ({ ...obj, [e[0]]: e[1] }), {});  // クエリがある場合 => { mode: "stub"}

    let apiPath = "https://example.com/api/weight";
    if (queryObj.mode === "stub") {
      apiPath += "?mode=stub";
      setInside1("https://example.com/inside-1.jpg");
      setInside2("https://example.com/inside-2.jpg");
    } else if (queryObj.mode === "red") {
      apiPath = "https://example2.com/api/weight";
      setInside1("static/inside-1.jpg");
      setInside2("static/inside-2.jpg");
    } else if (queryObj.mode === "local") {
      setInside1("../static/inside-1.jpg");
      setInside2("../static/inside-2.jpg");
    }

    // useEffect内は必ずcleanup関数を返すことになり、promiseを返さないため、
    // async関数を別途定義する必要がある
    async function fetchfunc(apiPath) {
      const res = await fetch(apiPath);
      const data = await res.json();
      setItems(data.items);
      setWeight(data.weight);
      setTitle(data.title);
      setFewItemName(data.fewItemName);
      setBestItemUrl(data.bestItemUrl);
    }

    // データセット
    if (!queryObj.mode || queryObj.mode === "local") {
      setItems({
        "item1": "ポカリスエット",
        "item2": "伊右衛門茶",
        "item3": "牛乳",
        "item4": "生茶",
        "item5": "卵",
        "item6": "氷"
      });
      setWeight({
        "weight1": 60,
        "weight2": 10,
        "weight3": 70,
        "weight4": 60,
        "deviceId": 1,
        "weight5": 5,
        "weight6": 80,
        "timestamp": new Date().toString()
      });
      setTitle("我が家の冷蔵庫");
      setFewItemName("伊右衛門茶");
      setBestItemUrl("https://www.yahoo.co.jp");
    } else {
      fetchfunc(apiPath);
    }

  }, [])

  return (
    <div className={classes.root}>
      <title>{title}</title>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            &nbsp;{title}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* news */}
            <Grid item xs={12}>
              <Paper className={classes.item}>
                <Typography  variant="body1" color="inherit">
                  {fewItemName === "loading..." ? "loading..." :
                  <span>お知らせ: {fewItemName}が残り少なくなりました。買い足しませんか。オススメの商品は<a href={bestItemUrl}>こちら</a></span>}
                </Typography>
              </Paper>
            </Grid>

            {/* weight */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Weight title={`1: ${items.item1}`} weight={weight.weight1} color="primary" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Weight title={`2: ${items.item2}`} weight={weight.weight2} color="primary" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Weight title={`3: ${items.item3}`} weight={weight.weight3} color="primary" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Weight title={`4: ${items.item4}`} weight={weight.weight4} color="primary" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Egg eggTitle={`5: ${items.item5}`} amount={weight.weight5} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={weightHeightPaper}>
                <Weight title={`6: ${items.item6}`} weight={weight.weight6} color="secondary" />
              </Paper>
            </Grid>

            {/* Picture */}
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.item}>
                <Picture title="冷蔵室" type="normal" path={inside1} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.item}>
                <Picture title="野菜室" type="freezer" path={inside2} />
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Lastupdated timestamp={weight.timestamp} />
      </main>
    </div>
  );
}
