import Link from "next/link";
import { SignIn, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container 
      maxWidth="100vw" 
      sx={{ 
        minHeight: "100vh", 
        padding: "0", 
        backgroundImage: "url('https://i.pinimg.com/originals/dc/ad/1e/dcad1e0ae9c943378f90c579a82d0040.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden"
      }}
    >
      <Head>
        <title>Flashbooks</title>
        <meta name="description" content="Create Flashbooks from your text" />
      </Head>
      <AppBar position="static" sx={{ bgcolor: "rgba(255, 255, 255, 0.8)", boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
            Flashcard
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in" sx={{ color: "#333" }}>Login</Button>
            <Button color="inherit" href="/sign-up" sx={{ color: "#333" }}>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box 
        sx={{
          textAlign: 'center',
          my: 4,
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          background: "rgba(255, 255, 255, 0.9)"
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
        Welcome to FlashBooks
        </Typography>
        <Typography variant="h5" sx={{ color: '#555', mb: 2 }}>
        The easiest way to create flashcards from your books
        </Typography>
        <Button variant="contained" sx={{ mt: 2, bgcolor: "#3f51b5", color: "#fff", '&:hover': { bgcolor: "#303f9f" } }}>Get Started</Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', color: '#333' }}>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: 'Easy Book Input', description: 'Simply input your book text and let our AI create flashcards for you.' },
            { title: 'Smart Flashcards', description: 'Our AI breaks down your book into concise flashcards, perfect for studying.' },
            { title: 'Accessible Anywhere', description: 'Access your flashcards from any device at any time. Study anywhere, anytime.' }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{
                p: 3,
                border: '2px solid #ccc',
                borderRadius: 2,
                borderTop: '3px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '3px solid rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                }
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#333' }}>{feature.title}</Typography>
                <Typography sx={{ color: '#555' }}>{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#333' }}>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { plan: 'Basic', price: '$5 / month', description: 'Access to basic flashcard features and limited storage' },
            { plan: 'Pro', price: '$10 / month', description: 'Access to pro flashcard features and unlimited storage' }
          ].map((pricing, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{
                p: 3,
                border: '2px solid #ccc',
                borderRadius: 2,
                borderTop: '3px solid rgba(255, 255, 255, 0.8)',
                borderLeft: '3px solid rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                }
              }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#333' }}>{pricing.plan}</Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#555' }}>{pricing.price}</Typography>
                <Typography sx={{ color: '#555' }}>{pricing.description}</Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: "#3f51b5", color: "#fff", '&:hover': { bgcolor: "#303f9f" } }}>Choose {pricing.plan}</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
