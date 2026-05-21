export default function LinkButton({ href, icon, upperText, lowerText }) {
  return (
    <a className="link-button" href={href} target="_blank">
      <div className="link-icon">
        {icon}
      </div>

      <div className="link-text-container">
        <span className="link-text-upper">{upperText}</span>
        <span className="link-text-lower">{lowerText}</span>
      </div>
    </a>
  );
}