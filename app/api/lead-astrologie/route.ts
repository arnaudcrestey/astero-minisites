async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!firstName.trim() || !email.trim()) {
    alert("Merci de remplir les champs obligatoires.");
    return;
  }

  setSending(true);

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.trim(),
        email: email.trim(),
        birthDay: birthDay.trim(),
        birthMonth: birthMonth.trim(),
        birthYear: birthYear.trim(),
        birthHour: birthHour.trim(),
        birthMinute: birthMinute.trim(),
        birthPlace: birthPlace.trim(),
        score,
        profile,
      }),
    });

    const result = await res.json();
    console.log("RESULT API /api/lead =", result);

    if (res.ok && result?.success) {
      alert("API OK");
    } else {
      alert(result?.error || "Erreur serveur.");
    }
  } catch (error) {
    console.error("Erreur fetch /api/lead :", error);
    alert("Erreur serveur.");
  } finally {
    setSending(false);
  }
}
