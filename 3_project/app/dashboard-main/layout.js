export default function DeshboardMainLayout({feeds, stats}){
    return (
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{width:"50%"}}>{feeds}</div>
        <div style={{width:"50%"}}>{stats}</div>
      </div>
    );
}