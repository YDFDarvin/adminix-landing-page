import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const NavMenu = () => {
  const { pathname } = useLocation();
  const [useCaseAnchor, setUseCaseAnchor] = useState<null | HTMLElement>(null);
  const isUseCaseOpen = Boolean(useCaseAnchor);
  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (pathname === "/" && target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleUseCaseOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUseCaseAnchor(event.currentTarget);
  };
  const handleUseCaseClose = () => {
    setUseCaseAnchor(null);
  };

  return (
    <nav className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#features"
          className="relative text-blue-700 content-center items-center shadow-[rgb(228,228,228)_0px_0px_0px_0px] box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("features")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Features
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#benefits"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("benefits")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Benefits
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#integrations"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("integrations")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Integrations
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Button
          id="use-cases-button"
          aria-controls={isUseCaseOpen ? "use-cases-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isUseCaseOpen ? "true" : undefined}
          onClick={handleUseCaseOpen}
          disableRipple
          endIcon={<KeyboardArrowDownIcon fontSize="small" />}
          sx={{
            color: "rgba(82, 82, 91, 0.8)",
            textTransform: "none",
            fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "-0.32px",
            lineHeight: "22.4px",
            padding: "10px 12px",
            minWidth: "auto",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          Use Cases
        </Button>
        <Menu
          id="use-cases-menu"
          anchorEl={useCaseAnchor}
          open={isUseCaseOpen}
          onClose={handleUseCaseClose}
          MenuListProps={{
            "aria-labelledby": "use-cases-button",
          }}
          PaperProps={{
            sx: {
              borderRadius: "12px",
              boxShadow: "rgba(0,0,0,0.08) 0px 10px 24px",
              padding: "4px 0",
              marginTop: "8px",
            },
          }}
        >
          {[
            { label: "Insurance", href: "/use-cases/insurance" },
            { label: "Healthcare", href: "/use-cases/healthcare" },
            { label: "HR", href: "/use-cases/hr" },
            { label: "Real Estate", href: "/use-cases/real-estate" },
            { label: "E-commerce", href: "/use-cases/e-commerce" },
          ].map((item) => (
            <MenuItem
              key={item.href}
              component={Link}
              to={item.href}
              onClick={handleUseCaseClose}
              sx={{
                fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(82, 82, 91, 0.9)",
                padding: "10px 16px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#pricing"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("pricing")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Pricing
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#faq"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("faq")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              FAQ
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
