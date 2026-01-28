import { Button, Stack, TextField } from "@mui/material";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const Contact = () => {
  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
  };

  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Contact
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                Get in touch
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                Tell us about your team and we will get back to you shortly.
              </p>
            </div>

            <form className="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px]">
              <Stack spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="First name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={textFieldSx}
                  />
                  <TextField
                    label="Last name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={textFieldSx}
                  />
                </Stack>
                <TextField
                  label="Work email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={textFieldSx}
                />
                <TextField label="Company" variant="outlined" size="small" fullWidth sx={textFieldSx} />
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      padding: "10px 20px",
                      backgroundColor: "#2563eb",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#1d4ed8",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Send message
                  </Button>
                </div>
              </Stack>
            </form>
          </div>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
