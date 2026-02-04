"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
/* ================================
   useRouter Hook (Next.js Notes)
   ================================

👉 What is useRouter?
- A hook used for programmatic navigation in Next.js.
- Helps move between pages without reloading the browser.
- Works ONLY in Client Components.

----------------------------------

✅ Import (App Router - Next 13+)

"use client";   // Required at top

import { useRouter } from 'next/navigation';

----------------------------------

👉 Create router object:

const router = useRouter();

----------------------------------

✅ Most Important Methods

1️⃣ router.push('/path')

- Navigates to a new page.
- Adds a new entry in browser history.
- User can press BACK to return.

Example:
router.push('/dashboard');

👉 Use for:
- Normal navigation
- Button click redirects

----------------------------------

2️⃣ router.replace('/path')

- Navigates but DOES NOT save history.
- User cannot go back.

Example:
router.replace('/login');

👉 Use for:
- After login
- After form submission
- Authentication redirects

----------------------------------

3️⃣ router.back()

- Works like browser back button.

Example:
router.back();

----------------------------------

4️⃣ router.refresh()

- Reloads the current page.
- Fetches fresh data from the server.
- Does NOT clear client state.

Example:
router.refresh();

👉 Use when:
- Database updated
- New data added
- Want latest server response

----------------------------------

🔥 push vs replace

push → saves history  
replace → removes history  

----------------------------------

⚠️ App Router vs Pages Router

✅ New (Recommended):
import { useRouter } from 'next/navigation';

❌ Old:
import { useRouter } from 'next/router';

- 'next/router' is for Pages Router only.

----------------------------------

🚨 Common Beginner Mistakes

❌ Using useRouter in Server Components.
✔ Hooks work only in Client Components.

❌ Forgetting "use client".

----------------------------------

🔥 Pro Tip

👉 Prefer <Link> for normal navigation:

import Link from 'next/link';

Why?
- Faster
- Prefetches pages
- Better performance

👉 Use useRouter when navigation happens after:
- API call
- Login/logout
- Form submission
- Conditional redirect

----------------------------------

✅ Quick Memory Trick:

Link → User clicks manually  
useRouter → Code decides navigation

================================ */

const page = () => {
    const router = useRouter()
    const handleClick = () =>{
        router.push('/home')
    }
    const handleClickReplace = () => {
        router.replace('/home')
    }
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={handleClick}>click to login(push)</button>
      <button onClick={handleClickReplace}>click to login(replace)</button>

      {/* <Link href={'/home'}>click to login</Link> */}
    </div>
  );
}

export default page