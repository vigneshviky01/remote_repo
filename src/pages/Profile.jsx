export default function Profile({ userInfo }) {
  const user = userInfo;

  return (
    <>
      {user ? (
        <div>
          <h2>Remote Profile Page</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.role && <p><strong>Role:</strong> {user.role}</p>}
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            (Rendered from remote-app)
          </p>
        </div>
      ) : (
        <div>loading....</div>
      )}
    </>
  );
}
